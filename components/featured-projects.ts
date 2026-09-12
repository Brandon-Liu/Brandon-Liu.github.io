export type CadView = {
  image: string;
  label: string;
  callout?: {
    side: 'left' | 'right';
    y: number;
    target: [number, number];
  };
};

type FeaturedProject = { id: string; label: string; theme: string } & (
  | { kind: 'subsystems'; views: CadView[]; small?: boolean }
  | {
      kind: 'image';
      image: string;
      width: number;
      height: number;
      viewBox: string;
      description: string;
    }
);

export const featuredProjects: FeaturedProject[] = [
  {
    id: 'cad-1',
    label: 'High Stakes Robot',
    theme: 'cad-theme-1',
    kind: 'subsystems',
    views: [
      { image: '/cad-1.png?v=bd91f3ab', label: 'Full robot' },
      {
        image: '/cad-1-view-2.png?v=ad92bdf3',
        label: 'Lift assembly',
        callout: { side: 'left', y: 380, target: [360, 660] },
      },
      {
        image: '/cad-1-view-3.png?v=dafceb2e',
        label: 'Chassis',
        callout: { side: 'right', y: 650, target: [850, 790] },
      },
      {
        image: '/cad-1-view-4.png?v=30180867',
        label: 'Intake System',
        callout: { side: 'left', y: 1020, target: [540, 1060] },
      },
    ],
  },
  {
    id: 'cad-2',
    label: 'Push Back Slingshot',
    theme: 'cad-theme-2',
    kind: 'subsystems',
    small: true,
    views: [
      { image: '/cad-3-view-3.png', label: 'Full robot' },
      {
        image: '/cad-3-view-1.png',
        label: 'Slingshot Assembly',
        callout: { side: 'right', y: 200, target: [770, 280] },
      },
      {
        image: '/cad-3-view-2.png',
        label: 'Matchload Bar',
        callout: { side: 'left', y: 850, target: [445, 820] },
      },
      {
        image: '/cad-3-view-4.png',
        label: 'Intake System',
        callout: { side: 'left', y: 530, target: [545, 730] },
      },
      {
        image: '/cad-3-view-5.png',
        label: 'Chassis',
        callout: { side: 'right', y: 1080, target: [970, 1090] },
      },
    ],
  },
  {
    id: 'cad-3',
    label: 'Override Robot',
    theme: '',
    kind: 'image',
    image: '/override-robot-white.png',
    width: 1672,
    height: 941,
    viewBox: '310 18 835 905',
    description:
      'Override Robot: competition robot with a vertical lift and cone-stacking mechanism',
  },
];
