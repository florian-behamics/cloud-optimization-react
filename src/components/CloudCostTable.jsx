import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './OptimizationTable.module.css';
import { Button } from '@mui/material';

const CloudCostTable = () => {
  const navigate = useNavigate();
  const [tableData] = useState([
    {
      id: 1,
      date: '23/02/2025',
      type: 'VM Resize',
      description: '10 VMs have been resized',
      savings: '4000$',
      percentage: '20%',
    },
    {
      id: 2,
      date: '24/02/2025',
      type: 'Storage Optimization',
      description: 'Reduced unused storage',
      savings: '2500$',
      percentage: '15%',
    },
    {
      id: 3,
      date: '25/02/2025',
      type: 'Networking',
      description: 'Optimized data transfer costs',
      savings: '1800$',
      percentage: '10%',
    },
  ]);

  return (
    <div className="table-container-cost-history">
      <div className="table-wrapper">
        <table>
          <thead>
            <tr style={{ color: '#5f5d6e', fontSize: '14px' }}>
              <th>Date</th>
              <th>Type</th>
              <th>Description</th>
              <th>Savings</th>
              <th>Savings%</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((entry) => (
              <tr key={entry.id}>
                <td>{entry.date}</td>
                <td>{entry.type}</td>
                <td>{entry.description}</td>
                <td className="savings">{entry.savings}</td>
                <td>{entry.percentage}</td>
                <td style={{ textAlign: 'right' }}>
                  <Button
                    variant="outlined"
                    color="secondary"
                    //   endIcon={<TbColorSwatch size={14} />}
                    onClick={() => navigate('/dashboard/applied-optimization-report')}
                  >
                    View
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CloudCostTable;
