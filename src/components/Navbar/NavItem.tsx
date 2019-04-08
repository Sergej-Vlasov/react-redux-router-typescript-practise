import React from 'react';
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

interface LinkProps {
    to: string;
    label: string;
}

const navItem: React.FC<LinkProps> = ({ to, label }) => (
    <Link to={to}>
      <Button variant="raised" color="primary">
        <span>{label}</span>
      </Button>
    </Link>
);

export default navItem;