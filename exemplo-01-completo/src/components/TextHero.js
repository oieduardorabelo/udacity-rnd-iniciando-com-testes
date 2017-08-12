import React, { Component } from 'react';

import './TextHero.css';

class TextHero extends Component {
  render() {
    const { children, title, className, ...rest } = this.props;
    const text = children
    ? children
    : title
      ? title
      : 'Default Title';

    return (
      <h1 className={`TextHero TextHero--boss ${className}`.trim()} {...rest}>{text}</h1>
    )
  }
}

export default TextHero;
