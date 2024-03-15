import { components, GroupBase, SelectComponentsConfig } from 'react-select';

import Sort from '@/components/ui/Icons/24/icons/sort.svg';

export interface Option {
  label: string | number;
  value: string | number;
}

export const getComponents: (
  hasRadio?: boolean,
  addItemHandler?: () => void,
  addItemLabel?: string
) => SelectComponentsConfig<Option, boolean, GroupBase<Option>> = (
  hasRadio,
  addItemHandler,
  addItemLabel
) => ({
  Menu: ({ ...props }) => (
    <components.Menu {...props}>
      <div>
        {props.children}
        {addItemHandler && (
          <button onClick={addItemHandler}>
            <span className="text-xs font-medium">{addItemLabel ?? 'Add Item'}</span>
          </button>
        )}
      </div>
    </components.Menu>
  ),

  Placeholder: ({ ...props }) => (
    <components.Placeholder {...props}>
      <PlaceHolder {...props}>{props.children}</PlaceHolder>
    </components.Placeholder>
  ),
  DropdownIndicator: ({ ...props }) => {
    const { options } = props;
    return (
      <components.DropdownIndicator {...props}>
        {options.length <= 5 ? <div>down</div> : <Sort />}
      </components.DropdownIndicator>
    );
  },
  ClearIndicator: (props: any) => (
    <components.ClearIndicator {...props}>
      {/* <Icon strokeWidth={"1"} icon="X" testid="cross-icon" /> */}
    </components.ClearIndicator>
  ),

  Option: ({ ...props }) =>
    hasRadio ? (
      <components.Option {...props}>
        <input
          onClick={(e) => {
            props.selectOption({ ...props.data });
            e.stopPropagation();
            e.preventDefault();
          }}
          type="radio"
          ref={props.innerRef}
          disabled={props.isDisabled}
          checked={props.isSelected}
        />

        {props.children}
      </components.Option>
    ) : (
      <components.Option className="hover:bg-gray-400" {...props}>
        <div className="text-sm">{props.children}</div>

        <IsMultiOptions {...props} />
      </components.Option>
    ),
  SingleValue: ({ ...props }) => {
    const { data } = props;
    return (
      <components.SingleValue {...props}>
        <p className="text-sm">{data?.label}</p>
      </components.SingleValue>
    );
  },
});

const IsMultiOptions = (props: any) => {
  if (props?.isMulti) {
    return (
      <button
        onClick={(e) => {
          props?.selectOption({ ...props?.data });
          e.stopPropagation();
          e.preventDefault();
        }}
      >
        {/* <Checkbox
          size="md"
          ref={props?.innerRef}
          disabled={props?.isDisabled}
          checked={props?.isSelected}
          className="accent-brand-primary"
        /> */}
      </button>
    );
  }
  if (props?.isSelected) {
    return null;
  }

  return null;
};

interface PlaceHolderProps extends SelectComponentsConfig<Option, boolean, GroupBase<Option>> {
  children: React.ReactNode;
}
const PlaceHolder = ({ children, ...props }: PlaceHolderProps) => {
  const { selectProps, isMulti } = props as any;

  if (isMulti) {
    if (Array.isArray(selectProps?.value)) {
      if ((selectProps?.value as Option[]).length === 0 || !selectProps?.value) {
        return selectProps?.placeholder;
      }
      if (selectProps?.value[0].value === '<SELECT_ALL>') {
        return <p>All items selected</p>;
      }
      return <p>{`${(selectProps?.value as Option[]).length} items selected`}</p>;
    }
  }
  return children;
};
