import React from 'react';
import { Template_zh } from './Template_zh';
import { Template_en } from './Template_en';

export const Resume: React.FC<any> = ({ template, ...restProps }) => {
  const Template = React.useMemo(() => {
    switch (template) {
      case 'template_en':
        return Template_en;
      default:
        return Template_zh;
    }
  }, [template]);

  return Template ? <Template {...restProps} /> : null;
};
