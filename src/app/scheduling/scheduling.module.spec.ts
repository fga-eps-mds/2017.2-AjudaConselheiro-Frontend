import { SchedulingModule } from './scheduling.module';

describe('SchedulingModule', () => {
  let schedulingModule: SchedulingModule;

  beforeEach(() => {
    schedulingModule = new SchedulingModule();
  });

  it('should create an instance', () => {
    expect(schedulingModule).toBeTruthy();
  });
});
