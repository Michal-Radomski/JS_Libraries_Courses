import { AllStaff } from "../AllStaff";

import { render, screen } from "@/test-utils";

test("renders response from query", async (): Promise<void> => {
  render(<AllStaff />);

  const staffNames: HTMLElement[] = await screen.findAllByRole("heading", {
    name: /divya|sandra|michael|mateo/i,
  });

  expect(staffNames).toHaveLength(4);
});
