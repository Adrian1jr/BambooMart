import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Button, 
  Table, 
  TableHeader, 
  TableColumn, 
  TableBody, 
  TableRow, 
  TableCell, 
  Input, 
  Select, 
  SelectItem 
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
  const [filterStatus, setFilterStatus] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Mock orders data
  const allOrders: Order[] = [
    { id: 'BMM-123456', date: '2023-06-15', status: 'Delivered', total: 149.97, items: 3 },
    { id: 'BMM-123457', date: '2023-05-22', status: 'Processing', total: 79.99, items: 1 },
    { id: 'BMM-123458', date: '2023-04-09', status: 'Delivered', total: 56.98, items: 2 },
    { id: 'BMM-123459', date: '2023-03-17', status: 'Cancelled', total: 89.99, items: 1 },
    { id: 'BMM-123460', date: '2023-02-04', status: 'Delivered', total: 129.98, items: 4 },
    { id: 'BMM-123461', date: '2023-01-11', status: 'Delivered', total: 45.99, items: 1 }
  ];
  
  const filteredOrders = allOrders
    .filter(order => {
      if (filterStatus !== "all" && order.status !== filterStatus) return false;
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
      <h1 className="text-2xl font-bold mb-6">My Orders</h1>
      
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <Input
          placeholder="Search by order ID"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          startContent={<Icon icon="lucide:search" className="text-default-400" />}
          className="w-full sm:w-64"
        />
        <Select
          label="Filter by status"
          selectedKeys={[filterStatus]}
          onChange={(e) => setFilterStatus(e.target.value)}
          variant="flat"
          className="w-full sm:w-64"
          classNames={{
            trigger: "h-10",
            value: "text-small"
          }}
        >
          <SelectItem key="all" value="all">All Statuses</SelectItem>
          <SelectItem key="Delivered" value="Delivered">Delivered</SelectItem>
          <SelectItem key="Processing" value="Processing">Processing</SelectItem>
          <SelectItem key="Shipped" value="Shipped">Shipped</SelectItem>
          <SelectItem key="Cancelled" value="Cancelled">Cancelled</SelectItem>
        </Select>
      </div>
      
      <Table 
        aria-label="Orders history" 
        removeWrapper
        shadow="none"
        classNames={{
          base: "border border-divider rounded-medium overflow-hidden"
        }}
      >
        <TableHeader>
          <TableColumn>ORDER #</TableColumn>
          <TableColumn>DATE</TableColumn>
          <TableColumn>STATUS</TableColumn>
          <TableColumn>ITEMS</TableColumn>
          <TableColumn>TOTAL</TableColumn>
        </TableHeader>
        <TableBody>
          {filteredOrders.length > 0 ? (
            filteredOrders.map(order => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{new Date(order.date).toLocaleDateString()}</TableCell>
                <TableCell>
                  <span 
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}
                  >
                    {order.status}
                  </span>
                </TableCell>
                <TableCell>{order.items}</TableCell>
                <TableCell>${order.total.toFixed(2)}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} className="text-center py-8">
                {searchQuery || filterStatus !== "all" 
                  ? "No orders match your filters"
                  : "You haven't placed any orders yet"}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProfileOrders;