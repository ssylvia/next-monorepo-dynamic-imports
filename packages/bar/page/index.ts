export interface ComponentDef {
  id: number;
  component: string;
  props: {
    text: string;
  }
}

export const page = [{
  id: 1,
  component: 'heading',
  props: {
    text: 'Heading 1',
  }
},
{
  id: 2,
  component: 'paragraph',
  props: {
    text: 'Paragraph 1',
  }
},
{
  id: 3,
  component: 'paragraph',
  props: {
    text: 'Paragraph 2',
  }
}];