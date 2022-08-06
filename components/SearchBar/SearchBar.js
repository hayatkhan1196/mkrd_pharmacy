import React, { useState } from 'react';
import { Input, InputGroup, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button, UncontrolledPopover, PopoverHeader, PopoverBody } from "reactstrap";

import styles from './SearchBar.module.scss';

export default function SearchBar() {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <InputGroup>
      <Button
        id="Popover1"
        type="button"
      >
        Launch Popover
      </Button>
      <UncontrolledPopover
        isOpen={dropdownOpen}
        target="Popover1"
        toggle={toggle}
        placement="bottom"
        trigger="legacy"
        className={styles['user-location-popover']}
        offset={[70, 4]}
      >
        <PopoverBody>
          Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
        </PopoverBody>
      </UncontrolledPopover>
      <Input />
    </InputGroup>
  )
}
