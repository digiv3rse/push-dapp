import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const Lock: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="Lock"
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="inherit"
          height="inherit"
          viewBox="0 0 29 28"
          fill="none"
          {...props}
        >
          <g clip-path="url(#clip0_5205_40502)">
            <path
              d="M21.8657 8.75H19.3657V6.125C19.3657 4.73261 18.8126 3.39726 17.828 2.41269C16.8435 1.42812 15.5081 0.875 14.1157 0.875C12.7233 0.875 11.388 1.42812 10.4034 2.41269C9.41885 3.39726 8.86572 4.73261 8.86572 6.125V8.75H6.36572C5.90159 8.75 5.45647 8.93437 5.12829 9.26256C4.8001 9.59075 4.61572 10.0359 4.61572 10.5V22.75C4.61572 23.2141 4.8001 23.6592 5.12829 23.9874C5.45647 24.3156 5.90159 24.5 6.36572 24.5H21.8657C22.3299 24.5 22.775 24.3156 23.1032 23.9874C23.4313 23.6592 23.6157 23.2141 23.6157 22.75V10.5C23.6157 10.0359 23.4313 9.59075 23.1032 9.26256C22.775 8.93437 22.3299 8.75 21.8657 8.75ZM14.1157 17.9375C13.8561 17.9375 13.6024 17.8605 13.3865 17.7163C13.1707 17.5721 13.0025 17.3671 12.9031 17.1273C12.8038 16.8874 12.7778 16.6235 12.8284 16.3689C12.8791 16.1143 13.0041 15.8805 13.1876 15.6969C13.3712 15.5134 13.6051 15.3884 13.8597 15.3377C14.1143 15.2871 14.3782 15.3131 14.618 15.4124C14.8578 15.5117 15.0628 15.68 15.207 15.8958C15.3512 16.1117 15.4282 16.3654 15.4282 16.625C15.4282 16.9731 15.2899 17.3069 15.0438 17.5531C14.7977 17.7992 14.4638 17.9375 14.1157 17.9375ZM17.6157 8.75H10.6157V6.125C10.6157 5.19674 10.9845 4.3065 11.6408 3.65013C12.2972 2.99375 13.1875 2.625 14.1157 2.625C15.044 2.625 15.9342 2.99375 16.5906 3.65013C17.247 4.3065 17.6157 5.19674 17.6157 6.125V8.75Z"
              fill="#C4CBD5"
            />
          </g>
          <defs>
            <clipPath id="clip0_5205_40502">
              <rect
                width="28"
                height="28"
                fill="white"
                transform="translate(0.115723)"
              />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  );
};

export default Lock;
