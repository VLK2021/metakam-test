import React from 'react';
import * as Select from '@radix-ui/react-select';

const OptionSelector = ({ label, options, value, onChange }) => {
    return (
        <Select.Root value={value} onValueChange={onChange}>
            <Select.Trigger className="option-selectors">
                <Select.Value placeholder={`Select ${label}`} />
                <Select.Icon />
            </Select.Trigger>
            <Select.Content className="select-content">
                <Select.Viewport>
                    {options.map((option) => (
                        <Select.Item key={option} value={option} className="select-item">
                            <Select.ItemText>{option}</Select.ItemText>
                        </Select.Item>
                    ))}
                </Select.Viewport>
            </Select.Content>
        </Select.Root>
    );
};

export default OptionSelector;
