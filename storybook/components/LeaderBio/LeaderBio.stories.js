import { LeaderBio } from './LeaderBio';

export default {
  title: 'Components/LeaderBio',
  render: (args) => LeaderBio(args),
};

export const ExecutiveBio = {
  args: {
    name: 'Robert Michael',
    title: 'Chairman and Chief Executive Officer',
    linkedInUrl: 'https://www.linkedin.com/in/robert-michael',
    bio: [
      'Robert Michael has served as Chairman and Chief Executive Officer since 2018. Under his leadership, the company has expanded its portfolio across oncology, immunology, and rare diseases.',
      'Before his current role, Robert served as Chief Operating Officer where he led the successful integration of multiple acquisitions and oversaw the launch of several blockbuster therapies.',
      'Robert holds a Ph.D. in Biochemistry from Stanford University and an MBA from Harvard Business School. He serves on the boards of several industry organizations and is a frequent speaker at global healthcare conferences.',
    ],
  },
};

export const RDLeaderBio = {
  args: {
    name: 'James Walker',
    title: 'Chief Scientific Officer',
    linkedInUrl: 'https://www.linkedin.com/in/james-walker',
    bio: [
      'Dr. James Walker leads the global research and development organization, overseeing a pipeline of more than 50 programs across multiple therapeutic areas.',
      'With over 25 years of experience in pharmaceutical research, James has been instrumental in advancing novel modalities including cell therapy, gene therapy, and targeted protein degradation.',
      'Prior to joining the company, James held senior research positions at leading academic medical centers and was a professor of molecular biology at Johns Hopkins University.',
    ],
  },
};
