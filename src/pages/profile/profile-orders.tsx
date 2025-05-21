import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Button, 
  Input, 
  Dropdown, 
  DropdownTrigger, 
  DropdownMenu, 
  DropdownItem,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell
} from '@heroui/react';
import { Icon } from '@iconify/react';

interface Order {
  id: string;
  date: string;
  status: string;
  total: number;
  items: number;
}

const ProfileOrders: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  
  // Mock orders data
  const allOrders: Order[] = [
    { id: 'BCC-123456', date: '2023-06-15', status: 'Delivered', total: 149.97, items: 3 },
    { id: 'BCC-123457', date: '2023-05-22', status: 'Processing', total: 79.99, items: 1 },
    { id: 'BCC-123458', date: '2023-04-10', status: 'Delivered', total: 56.98, items: 2 },
    { id: 'BCC-123459', date: '2023-03-18', status: 'Cancelled', total: 89.99, items: 1 },
    { id: 'BCC-123460', date: '2023-02-05', status: 'Delivered', total: 129.98, items: 2 },
    { id: 'BCC-123461', date: '2023-01-12', status: 'Delivered', total: 45.99, items: 1 }
  ];
  
  const filteredOrders = allOrders
    .filter(order => {
      if (statusFilter && order.status !== statusFilter) return false;
      if (searchQuery) {
        return order.id.toLowerCase().includes(searchQuery.toLowerCase());
      }
      return true;
    });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered':
        return 'bg-success-100 text-success-500';
      case 'Processing':
        return 'bg-primary-100 text-primary-500';
      case 'Shipped':
        return 'bg-warning-100 text-warning-500';
      case 'Cancelled':
        return 'bg-danger-100 text-danger-500';
      default:
        return 'bg-default-100 text-default-500';
    }
  };

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h2 className="text-xl font-semibold">Order History</h2>
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <Input
            placeholder="Search by order ID"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            startContent={<Icon icon="lucide:search" className="text-default-400" />}
            className="w-full sm:w-64"
          />
          <Dropdown>
            <DropdownTrigger>
              <Button 
                variant="flat" 
                endContent={<Icon icon="lucide:chevron-down" />}
              >
                {statusFilter || "All Statuses"}
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              disallowEmptySelection
              selectedKeys={statusFilter ? [statusFilter] : []}
              onSelectionChange={(keys) => {
                const selected = Array.from(keys)[0]?.toString() || null;
                setStatusFilter(selected);
              }}
              selectionMode="single"
            >
              <DropdownItem key="all" textValue="All">All Statuses</DropdownItem>
              <DropdownItem key="Delivered">Delivered</DropdownItem>
              <DropdownItem key="Processing">Processing</DropdownItem>
              <DropdownItem key="Shipped">Shipped</DropdownItem>
              <DropdownItem key="Cancelled">Cancelled</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
      
      {filteredOrders.length > 0 ? (
        <Table removeWrapper aria-label="Orders history table">
          <TableHeader>
            <TableColumn>ORDER #</TableColumn>
            <TableColumn>DATE</TableColumn>
            <TableColumn>STATUS</TableColumn>
            <TableColumn>ITEMS</TableColumn>
            <TableColumn>TOTAL</TableColumn>
            <TableColumn>ACTIONS</TableColumn>
          </TableHeader>
          <TableBody>
            {filteredOrders.map(order => (
              <TableRow key={order.id}>
                <TableCell>
                  <span className="font-medium">{order.id}</span>
                </TableCell>
                <TableCell>
                  {new Date(order.date).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </TableCell>
                <TableCell>
                  {order.items}
                </TableCell>
                <TableCell className="font-medium">
                  ${order.total.toFixed(2)}
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button 
                      as={Link} 
                      to={`/profile/orders/${order.id}`}
                      size="sm" 
                      variant="flat" 
                    >
                      View
                    </Button>
                    {order.status === 'Delivered' && (
                      <Button size="sm" variant="flat" startContent={<Icon icon="lucide:repeat" />}>
                        Reorder
                      </Button>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <div className="text-center py-12">
          <Icon icon="lucide:package-x" className="text-default-300 text-4xl mx-auto mb-3" />
          <p className="text-default-600">No orders found matching your criteria.</p>
          {!!searchQuery || statusFilter ? (
            <Button 
              variant="flat"
              className="mt-4"
              onPress={() => {
                setSearchQuery('');
                setStatusFilter(null);
              }}
            >
              Clear Filters
            </Button>
          ) : (
            <Button 
              as={Link}
              to="/categories"
              color="primary"
              variant="flat"
              className="mt-4"
            >
              Start Shopping
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default ProfileOrders;