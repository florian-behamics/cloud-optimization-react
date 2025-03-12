import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './OptimizationTable.module.css';
import { Button } from '@mui/material';

const DeploymentLogsTable = () => {
  const navigate = useNavigate();
  const [tableData] = useState([
    {
      id: 1,
      date: '2025-01-11T09:04:43.758Z',
      log: 'MongoDB admin user "dbadmin" created with generated password',
    },
    {
      id: 2,
      date: '2025-01-11T10:02:20.758Z',
      log: 'Successfully configured MongoDB security on VM CO120325T1224vm',
    },
    {
      id: 3,
      date: '2025-02-11T16:09:05.758Z',
      log: 'Configuring MongoDB security on VM CO120325T1224vm',
    },
    {
      id: 4,
      date: '2025-02-11T20:08:10.758Z',
      log: 'MongoDB successfully installed and verified on VM CO120325T1224vm',
    },
    {
      id: 5,
      date: '2025-03-11T23:02:32.758Z',
      log: 'Installing MongoDB on VM CO120325T1224vm! Target: team@behamics.com',
    },
    {
      id: 6,
      date: '2025-03-11T23:10:20.758Z',
      log: 'Creating 2 databases! Target: team@behamics.com',
    },
    {
      id: 7,
      date: '2025-03-11T23:52:00.758Z',
      log: 'Created 2 VMs of type: Standard_B1s successfully! Target: team@behamics.com',
    },
  ]);

  return (
    <div className="table-container-cost-history">
      <div className="table-wrapper">
        <table>
          <thead>
            <tr style={{ color: '#5f5d6e', fontSize: '14px' }}>
              <th>Date</th>
              <th>Log</th>

              <th></th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((entry) => (
              <tr key={entry.id}>
                <td>{entry.date}</td>
                <td>{entry.log}</td>
                <td style={{ textAlign: 'right' }}>
                  <Button
                    variant="outlined"
                    color="secondary"
                    //   endIcon={<TbColorSwatch size={14} />}
                    // onClick={() => navigate('/dashboard/applied-optimization-report')}
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

export default DeploymentLogsTable;
