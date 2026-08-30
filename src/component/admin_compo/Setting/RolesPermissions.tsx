import React, { useState } from 'react';
import { Shield, PlusCircle, CheckCircle2, XCircle, PenLine } from 'lucide-react';
import './RolesPermissions.css';

// Type definitions
interface Permissions {
  dashboard: boolean;
  bookings: boolean;
  staff: boolean;
  finance: boolean;
  actions: boolean;
}

interface Role {
  id: number;
  name: string;
  description: string;
  permissions: Permissions;
}

interface NewRole {
  name: string;
  description: string;
  permissions: Permissions;
}

type PermissionKey = keyof Permissions;

const RolesPermissions: React.FC = () => {
  const [roles, setRoles] = useState<Role[]>([
    {
      id: 1,
      name: 'Senior Manager',
      description: 'Full branch control',
      permissions: {
        dashboard: true,
        bookings: true,
        staff: true,
        finance: true,
        actions: true
      }
    },
    {
      id: 2,
      name: 'Receptionist',
      description: 'Scheduling only',
      permissions: {
        dashboard: false,
        bookings: true,
        staff: false,
        finance: false,
        actions: false
      }
    }
  ]);

  const [showCreateModal, setShowCreateModal] = useState<boolean>(false);
  const [newRole, setNewRole] = useState<NewRole>({
    name: '',
    description: '',
    permissions: {
      dashboard: false,
      bookings: false,
      staff: false,
      finance: false,
      actions: false
    }
  });

  const permissionLabels: Record<PermissionKey, string> = {
    dashboard: 'DASHBOARD',
    bookings: 'BOOKINGS',
    staff: 'STAFF',
    finance: 'FINANCE',
    actions: 'ACTIONS'
  };

  const permissionKeys: PermissionKey[] = ['dashboard', 'bookings', 'staff', 'finance', 'actions'];

  const handlePermissionToggle = (roleId: number, permissionKey: PermissionKey): void => {
    setRoles(prevRoles =>
      prevRoles.map(role =>
        role.id === roleId
          ? {
            ...role,
            permissions: {
              ...role.permissions,
              [permissionKey]: !role.permissions[permissionKey]
            }
          }
          : role
      )
    );
  };

  const handleCreateRole = (): void => {
    if (newRole.name.trim()) {
      const role: Role = {
        id: Date.now(),
        name: newRole.name.trim(),
        description: newRole.description.trim() || 'No description',
        permissions: { ...newRole.permissions }
      };
      setRoles([...roles, role]);
      setNewRole({
        name: '',
        description: '',
        permissions: {
          dashboard: false,
          bookings: false,
          staff: false,
          finance: false,
          actions: false
        }
      });
      setShowCreateModal(false);
    }
  };

  const handleNewPermissionToggle = (permissionKey: PermissionKey): void => {
    setNewRole(prev => ({
      ...prev,
      permissions: {
        ...prev.permissions,
        [permissionKey]: !prev.permissions[permissionKey]
      }
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setNewRole(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleModalClose = (): void => {
    setShowCreateModal(false);
  };

  const handleModalOverlayClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (e.target === e.currentTarget) {
      handleModalClose();
    }
  };

  return (
    <>
      <div className="roles-permissions-container">
        <div className="header">
          <div className="header-left">
            <div className="header-title">
              <Shield className="shield-icon" size={20} />
              <h2>Roles & Permissions</h2>
            </div>
            <p className="subtitle">Define user access levels</p>
          </div>
          <button
            className="create-role-btn"
            onClick={() => setShowCreateModal(true)}
          >
            <PlusCircle size={16} /> Create Role
          </button>
        </div>

        <div className="table-container">
          <table className="permissions-table">
            <thead>
              <tr>
                <th>ROLE NAME</th>
                {permissionKeys.map(key => (
                  <th key={key}>{permissionLabels[key]}</th>
                ))}
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {roles.map(role => (
                <tr key={role.id} className="role-row">
                  <td className="role-info">
                    <div className="role-name">{role.name}</div>
                    <div className="role-description">{role.description}</div>
                  </td>
                  {permissionKeys.map(key => (
                    <td key={key}>
                      <button
                        className={`permission-toggle ${role.permissions[key] ? 'active' : 'inactive'}`}
                        onClick={() => handlePermissionToggle(role.id, key)}
                        aria-label={`Toggle ${permissionLabels[key]} permission for ${role.name}`}
                      >
                        {role.permissions[key] ? (
                          <CheckCircle2 size={18} className="icon-active" style={{ fill: '#60a5fa', color: '#10172a' }} />
                        ) : (
                          <XCircle size={18} className="icon-inactive" style={{ color: '#475569' }} />
                        )}
                      </button>
                    </td>
                  ))}
                  <td>
                    <button
                      className="edit-btn"
                      onClick={() => {/* Edit role placeholder */}}
                      aria-label={`Edit ${role.name} role`}
                    >
                      <PenLine size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Create Role Modal */}
        {showCreateModal && (
          <div
            className="modal-overlay"
            onClick={handleModalOverlayClick}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div className="modal-content">
              <h3 id="modal-title">Create New Role</h3>
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="role-name">Role Name *</label>
                  <input
                    id="role-name"
                    type="text"
                    name="name"
                    placeholder="Enter role name"
                    value={newRole.name}
                    onChange={handleInputChange}
                    autoFocus
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="role-description">Description</label>
                  <input
                    id="role-description"
                    type="text"
                    name="description"
                    placeholder="Enter description"
                    value={newRole.description}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>Permissions</label>
                  <div className="permissions-grid">
                    {permissionKeys.map(key => (
                      <div key={key} className="permission-item">
                        <button
                          className={`permission-toggle ${newRole.permissions[key] ? 'active' : 'inactive'}`}
                          onClick={() => handleNewPermissionToggle(key)}
                          aria-label={`Toggle ${permissionLabels[key]} permission`}
                        >
                          {newRole.permissions[key] ? (
                            <CheckCircle2 size={18} className="icon-active" style={{ fill: '#60a5fa', color: '#10172a' }} />
                          ) : (
                            <XCircle size={18} className="icon-inactive" style={{ color: '#475569' }} />
                          )}
                        </button>
                        <span>{permissionLabels[key]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  className="cancel-btn"
                  onClick={handleModalClose}
                >
                  Cancel
                </button>
                <button
                  className="submit-btn"
                  onClick={handleCreateRole}
                  disabled={!newRole.name.trim()}
                >
                  Create Role
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default RolesPermissions;