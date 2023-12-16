export const colors = {
  primary: "#645cff",
};

export const setupBorder = ({ width, type = "solid", color }: { width: number; type: string; color: string }): string => {
  return `${width}px ${type} ${color}`;
};
