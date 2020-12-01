import React from 'react'
import './ratio-div.scss';
import classname from 'classnames';

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children?: React.ReactNode;
  widthRatio?: number;
}

export default function RatioDiv(props: Props) {
  const {widthRatio, children, className, ...divProps} = props;

  const _widthRatio = widthRatio || 1;

  const _className = classname(className, "ratio-div-container");

  return (
    <div className={_className} {...divProps}>
      <img src={`data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${_widthRatio} 1'/>`}/>
      <div className="content">{children}</div>
    </div>
  )
}
