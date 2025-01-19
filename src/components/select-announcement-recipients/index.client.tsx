import { SelectInput } from '@payloadcms/ui';
import React from 'react';

export const SelectAnnouncementRecipients: React.FC = () => {
  return (
    <div className="tenant-selector">
      <SelectInput
        label="Select a tenant"
        name="setTenant"
        // onChange={handleChange}
        // options={options}
        path="setTenant"
        // value={options.find((opt) => opt.value === initialCookie)?.value}
      />
    </div>
  );
};
