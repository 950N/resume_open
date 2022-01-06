import React, { useState, useEffect } from 'react';
import { Button, Affix, message } from 'antd';
import _ from 'lodash';
import { RESUME_INFO } from '../datas/resume';
import { getDevice } from '../helpers/detect-device';
import { Resume } from './Resume';
import { ResumeConfig, ThemeConfig } from './types';
import './index.less';

const Page: React.FC = () => {
  const [config] = useState<ResumeConfig>(RESUME_INFO);
  const [mode] = useState<string>('print');
  const [template] = useState<string>('template1');
  const [theme] = useState<ThemeConfig>({
    color: '#2f5785',
    tagColor: '#8bc34a',
  });

  useEffect(() => {
    if (getDevice() === 'mobile') {
      message.info('移动端只提供查看功能，在线制作请前往 PC 端');
    }
  }, []);

  const [box, setBox] = useState({ width: 0, height: 0, left: 0 });

  useEffect(() => {
    const targetNode = document.querySelector('.resume-content');
    if (!targetNode) return;

    const observer = new MutationObserver(() => {
      setBox(targetNode.getBoundingClientRect());
    });
    observer.observe(targetNode, {
      childList: true,
      subtree: true,
      attributes: true,
    });

    // 再加一个定时器，监控下变化
    const interval = setInterval(() => {
      setBox(targetNode.getBoundingClientRect());
    }, 1000);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  return (
    <React.Fragment>
      <div className="page">
        {config && <Resume value={config} theme={theme} template={template} />}
        {mode === 'print' && (
          <React.Fragment>
            <Affix offsetTop={0}>
              <Button.Group className="btn-group">
                <Button.Group className="btn-group" style={{ marginLeft: 0 }}>
                  <Button type="primary" onClick={() => window.print()}>
                    PDF 下载
                  </Button>
                </Button.Group>
              </Button.Group>
            </Affix>
            <div
              className="box-size-info"
              style={{
                top: `${box.height + 4}px`,
                left: `${box.width + box.left}px`,
              }}
            >
              ({box.width}, {box.height})
            </div>
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
};

export default Page;
