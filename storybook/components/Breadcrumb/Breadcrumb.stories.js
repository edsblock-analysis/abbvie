import { Breadcrumb } from './Breadcrumb';
import { refBanner } from '../../helpers/reference';

export default {
  title: 'Components/Breadcrumb',
  render: (args) => Breadcrumb(args),
  parameters: {
    docs: {
      description: {
        component: '**Production reference:** [robert-michael](https://www.abbvie.com/who-we-are/our-leaders/robert-michael.html) (multi-level: Who We Are > Our Leaders > Robert A. Michael), [available-programs](https://www.abbvie.com/patients/patient-support/patient-assistance/available-programs.html) (4-level breadcrumb)\n\nHierarchical path navigation. Found on 158 pages. AEM component: breadcrumb abbvie-breadcrumb.',
      },
    },
  },
};

export const MultiLevel = {
  args: {
    items: [
      { label: 'Who We Are', href: '/who-we-are.html' },
      { label: 'Our Leaders', href: '/who-we-are/our-leaders.html' },
      { label: 'Robert A. Michael' },
    ],
  },
  render: (args) => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = refBanner([{label:'Robert Michael Bio',url:'https://www.abbvie.com/who-we-are/our-leaders/robert-michael.html'}]);
    wrapper.appendChild(Breadcrumb(args));
    return wrapper;
  },
};

export const SingleLevel = {
  args: {
    items: [
      { label: 'All Stories', href: '/who-we-are/our-stories.html' },
    ],
  },
  render: (args) => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = refBanner([{label:'Our Stories',url:'https://www.abbvie.com/who-we-are/our-stories.html'}]);
    wrapper.appendChild(Breadcrumb(args));
    return wrapper;
  },
};
