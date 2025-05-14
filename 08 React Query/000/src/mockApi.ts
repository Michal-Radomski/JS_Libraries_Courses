export const fetchTasks = (): Promise<{ [key: string]: number | string }[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: "Complete React Query tutorial" },
        { id: 2, title: "Implement task filtering" },
        { id: 3, title: "Test application thoroughly" },
      ]);
    }, 1000); // 1 second delay
  });
};
