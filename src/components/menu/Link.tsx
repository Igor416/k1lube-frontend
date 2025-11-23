import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface LinkProps {
  active?: boolean;
  variant: 'h6' | 'body1'
  path?: string;
  label: string;
}

export function Link({ active = false, variant, path, label }: LinkProps) {
  const navigate = useNavigate();

  return (
    <Typography
      variant={variant}
      noWrap
      onClick={path ? () => navigate(path) : () => {}}
      sx={{cursor: 'pointer', fontWeight: variant === 'h6' ? 'bold' : 400 }}
      color={active ? 'primary' : 'black'}
    >
      {label}
    </Typography>
  );
};
