import { name$, storeDataOnServer, storeDataOnServerError } from "./external";

name$.subscribe((value: string) => console.log(1, { value }));

storeDataOnServer("Some value").subscribe({
  next: (value) => console.log(2, { value }),
  error: (err) => console.log("Error when saving:", err.message),
});

storeDataOnServerError("Some value").subscribe({
  next: (value) => console.log(3, { value }),
  error: (err) => console.log("Error when saving:", err.message),
});
