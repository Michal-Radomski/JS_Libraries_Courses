import { name$, storeDataOnServer, storeDataOnServerError } from "./external";

name$.subscribe((value: string) => console.log(1, { value }));

storeDataOnServer("Some value").subscribe((value: string) => console.log(2, { value }));

storeDataOnServerError("Some value").subscribe({
  next: (value: string) => console.log(3, { value }),
  error: (err: Error) => console.log("Error when saving:", err.message),
});
