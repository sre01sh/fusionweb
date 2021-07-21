import { useIntl } from 'umi';
import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';
export default () => {
  const intl = useIntl();
  const defaultMessage = intl.formatMessage({
    id: 'app.copyright.produced',
    defaultMessage: '蚂蚁集团体验技术部出品',
  });
  return (
    <DefaultFooter
      // copyright={`2020 ${defaultMessage}`}
      copyright='2021 Molex Manufacturing & Engineering Technology Integration Team'
      
      links={[
        // {
        //   key: 'github',
        //   title: <GithubOutlined />,
        //   href: 'https://,
        //   blankTarget: true,
        // }
      ]}
    />
  );
};
