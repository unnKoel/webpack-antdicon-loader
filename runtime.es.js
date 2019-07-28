import AntIcon from '@ant-design/icons-react';
import React, {PureComponent} from 'react';

const originalGet = AntIcon.get.bind (AntIcon);
AntIcon.get = (key, colors) => {
  const target = originalGet (key, colors);
  return (
    target || {
      icon: {
        tag: props => (
          <WrapAntIcon
            type={key}
            primaryColor={colors.primaryColor}
            secondaryColor={colors.secondaryColor}
            {...props}
          />
        ),
      },
    }
  );
};

/**
 * AntIcon wrap Component
 */
export default class WrapAntIcon extends PureComponent {
  static allIconInstances = [];
  static loadAll (icons) {
    AntIcon.add (...Object.keys(icons).map((key) => icons[key]));
    AntIcon.get = originalGet;
    this.allIconInstances.map (instance => instance.forceUpdate ());
    this.allIconInstances = [];
  }

  componentDidMount () {
    WrapAntIcon.allIconInstances.push (this);
  }

  componentWillUnmount () {
    const index = WrapAntIcon.allIconInstances.indexOf (this);
    WrapAntIcon.allIconInstances.splice (index, 1);
  }

  render () {
    const {type, primaryColor, secondaryColor, ...props} = this.props;
    // judage target exsit, is not, show a empty svg.
    const target = originalGet (type, {primaryColor, secondaryColor});
    if (target) {
      return <AntIcon {...this.props} />;
    } else {
      return <svg {...props} />;
    }
  }
}