import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const TickDecoratedCircleFilled: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="TickCircleFilled"
      icon={
        <svg
          width="inherit"
          height="inherit"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Vector"
            d="M14.9929 6.2C14.7214 5.92143 14.4429 5.62857 14.3357 5.37857C14.2286 5.12857 14.2357 4.75714 14.2286 4.37857C14.2214 3.68571 14.2071 2.89286 13.6571 2.34286C13.1071 1.79286 12.3143 1.77857 11.6214 1.77143C11.2429 1.76429 10.8571 1.75714 10.6214 1.66429C10.3857 1.57143 10.0786 1.27857 9.8 1.00714C9.30714 0.535714 8.74286 0 8 0C7.25714 0 6.69286 0.535714 6.2 1.00714C5.92143 1.27857 5.62857 1.55714 5.37857 1.66429C5.12857 1.77143 4.75714 1.76429 4.37857 1.77143C3.68571 1.77857 2.89286 1.79286 2.34286 2.34286C1.79286 2.89286 1.77857 3.68571 1.77143 4.37857C1.76429 4.75714 1.75714 5.14286 1.66429 5.37857C1.57143 5.61429 1.27857 5.92143 1.00714 6.2C0.535714 6.69286 0 7.25714 0 8C0 8.74286 0.535714 9.30714 1.00714 9.8C1.27857 10.0786 1.55714 10.3714 1.66429 10.6214C1.77143 10.8714 1.76429 11.2429 1.77143 11.6214C1.77857 12.3143 1.79286 13.1071 2.34286 13.6571C2.89286 14.2071 3.68571 14.2214 4.37857 14.2286C4.75714 14.2357 5.14286 14.2429 5.37857 14.3357C5.61429 14.4286 5.92143 14.7214 6.2 14.9929C6.69286 15.4643 7.25714 16 8 16C8.74286 16 9.30714 15.4643 9.8 14.9929C10.0786 14.7214 10.3714 14.4429 10.6214 14.3357C10.8714 14.2286 11.2429 14.2357 11.6214 14.2286C12.3143 14.2214 13.1071 14.2071 13.6571 13.6571C14.2071 13.1071 14.2214 12.3143 14.2286 11.6214C14.2357 11.2429 14.2429 10.8571 14.3357 10.6214C14.4286 10.3857 14.7214 10.0786 14.9929 9.8C15.4643 9.30714 16 8.74286 16 8C16 7.25714 15.4643 6.69286 14.9929 6.2ZM11.5357 6.7L7.35 10.7C7.24179 10.8018 7.09856 10.8581 6.95 10.8571C6.80362 10.8577 6.66276 10.8014 6.55714 10.7L4.46429 8.7C4.40624 8.64936 4.35903 8.5875 4.3255 8.51814C4.29197 8.44879 4.2728 8.37337 4.26916 8.29642C4.26552 8.21947 4.27748 8.14258 4.30431 8.07037C4.33115 7.99816 4.3723 7.93212 4.42531 7.87622C4.47832 7.82032 4.54208 7.77572 4.61277 7.74509C4.68345 7.71446 4.7596 7.69844 4.83663 7.69799C4.91367 7.69755 4.99 7.71268 5.06103 7.74249C5.13207 7.77229 5.19635 7.81615 5.25 7.87143L6.95 9.49286L10.75 5.87143C10.8611 5.77449 11.0054 5.72426 11.1527 5.73123C11.3 5.73819 11.4389 5.80183 11.5403 5.90882C11.6418 6.01581 11.6979 6.15789 11.6971 6.30533C11.6962 6.45278 11.6384 6.59419 11.5357 6.7Z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default TickDecoratedCircleFilled;
