export type ScheduleEvent = {
  time: string;
  event: string;
  section: string;
  round?: string | null;
  venue?: string;
};
