import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './TableTest.css';

const TableTest = () => {
  const [expandedRow, setExpandedRow] = useState(null);

  const navigate = useNavigate();

  const [tableData] = useState([
    {
      category: 'To be Resized',
      vms: [
        {
          name: 'VM-1',
          currentVM: 'Standard_D4s_v3',
          optimizedVM: 'Standard_D2s_v3',
          savings: '50%',
          reason: 'The avg RAM usage is 10%',
        },
        {
          name: 'VM-2',
          currentVM: 'Standard_D8s_v3',
          optimizedVM: 'Standard_D4s_v3',
          savings: '45%',
          reason: 'Low utilization rate',
        },
        {
          name: 'VM-3',
          currentVM: 'Standard_E4s_v3',
          optimizedVM: 'Standard_E2s_v3',
          savings: '48%',
          reason: 'CPU underutilization',
        },
        {
          name: 'VM-4',
          currentVM: 'Standard_F8s_v2',
          optimizedVM: 'Standard_F4s_v2',
          savings: '52%',
          reason: 'Memory over-allocation',
        },
      ],
    },
    {
      category: 'To be Migrated',
      vms: [
        {
          name: 'VM-5',
          currentVM: 'Standard_D16s_v3',
          optimizedVM: 'Standard_D8s_v4',
          savings: '55%',
          reason: 'Better pricing on newer instances',
        },
        {
          name: 'VM-6',
          currentVM: 'Standard_E8s_v3',
          optimizedVM: 'Standard_E4s_v4',
          savings: '47%',
          reason: 'Regional cost efficiency',
        },
        {
          name: 'VM-7',
          currentVM: 'Standard_F16s_v2',
          optimizedVM: 'Standard_F8s_v3',
          savings: '51%',
          reason: 'High idle time detected',
        },
        {
          name: 'VM-8',
          currentVM: 'Standard_D32s_v3',
          optimizedVM: 'Standard_D16s_v4',
          savings: '53%',
          reason: 'Lower performance demand',
        },
      ],
    },
  ]);

  const toggleRow = (vmName) => {
    setExpandedRow((prev) => (prev === vmName ? null : vmName));
  };

  return (
    <div className="table-container">
      <div className="table-wrapper">
        <table>
          <thead>
            <tr style={{ color: '#5f5d6e', fontSize: '14px' }}>
              <th style={{ width: '200px' }}>Virtual Machines</th>
              <th>Current VM</th>
              <th>Optimized VM</th>
              <th>Savings%</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((category, categoryIndex) => {
              const expandedCount = category.vms.some((vm) => expandedRow === vm.name) ? 1 : 0;
              return (
                <React.Fragment key={categoryIndex}>
                  {category.vms.map((vm, vmIndex) => (
                    <React.Fragment key={`${categoryIndex}-${vmIndex}`}>
                      <tr>
                        {vmIndex === 0 ? (
                          <td
                            className="category-cell"
                            rowSpan={category.vms.length + expandedCount}
                          >
                            {category.category}
                          </td>
                        ) : null}
                        <td>{vm.currentVM}</td>
                        <td>{vm.optimizedVM}</td>
                        <td className="savings">{vm.savings}</td>
                        <td>
                          <button className="action-button" onClick={() => toggleRow(vm.name)}>
                            <ExpandMoreIcon
                              sx={{
                                transform:
                                  expandedRow === vm.name ? 'rotate(180deg)' : 'rotate(0deg)',
                                transition: 'transform 0.3s ease',
                              }}
                            />
                          </button>
                        </td>
                      </tr>
                      {expandedRow === vm.name && (
                        <tr className="details-row">
                          <td
                            colSpan={4}
                            className="details-cell expanded"
                            style={{ backgroundColor: '#f5f5f5' }}
                          >
                            <div
                              className="details-content"
                              style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '10px',
                                borderRadius: '5px',
                                transition: 'opacity 0.3s ease',
                                opacity: expandedRow === vm.name ? 1 : 0,
                              }}
                            >
                              <Typography
                                variant="body1"
                                color="text.secondary"
                                sx={{ fontSize: '14px' }}
                              >
                                {vm.reason}
                              </Typography>

                              <Button
                                variant="contained"
                                color="primary"
                                onClick={() => {
                                  navigate('/dashboard/single-monitor-vm');
                                }}
                                sx={{
                                  display: { xs: 'none', md: 'flex' },
                                }}
                              >
                                Export
                              </Button>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableTest;
