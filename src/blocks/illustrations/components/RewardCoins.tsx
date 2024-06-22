import { FC } from 'react';
import { IllustrationWrapper } from '../IllustrationWrapper';
import { IllustrationProps } from '../Illustrations.types';

const RewardCoins: FC<IllustrationProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IllustrationWrapper
      componentName="RewardCoins"
      illustration={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={restProps.width ?? '48'}
          height={restProps.height ?? '48'}
          viewBox="0 0 16 21"
          fill="none"
          {...props}
        >
          <g clip-path="url(#clip0_3491_16434)">
            <path
              d="M8.00332 19.9728C6.49262 19.9728 5.26392 18.6863 5.26392 17.1046C5.26392 16.6758 5.59291 16.3313 6.00248 16.3313H9.99745C10.407 16.3313 10.736 16.6758 10.736 17.1046C10.736 18.6863 9.50731 19.9728 7.99661 19.9728H8.00332Z"
              fill="#F9CB56"
            />
            <path
              d="M9.99747 16.8584C10.125 16.8584 10.2325 16.9709 10.2325 17.1045C10.2325 18.398 9.23205 19.4454 7.99663 19.4454C6.76122 19.4454 5.7608 18.398 5.7608 17.1045C5.7608 16.9709 5.86822 16.8584 5.99579 16.8584H9.99076M9.99076 15.804H5.99579C5.31094 15.804 4.75366 16.3874 4.75366 17.1045C4.75366 18.9744 6.21065 20.4999 7.99663 20.4999C9.78262 20.4999 11.2396 18.9744 11.2396 17.1045C11.2396 16.3874 10.6823 15.804 9.99747 15.804H9.99076Z"
              fill="#BC9128"
            />
            <path
              d="M2.02096 16.711C1.18168 16.711 0.50354 15.9729 0.50354 15.059V9.3226C0.50354 4.74615 3.86737 1.02734 8.00333 1.02734C12.1393 1.02734 15.5031 4.74615 15.5031 9.3226V15.059C15.5031 15.9729 14.825 16.711 13.9857 16.711H2.02096ZM8.00333 5.42102C7.9429 5.42102 7.92276 5.4632 7.92276 5.48429L7.22448 7.50186C7.04991 8.00801 6.67391 8.40168 6.19049 8.58446L4.26351 9.31557C4.26351 9.31557 4.20308 9.33666 4.20308 9.39993C4.20308 9.4632 4.24336 9.48429 4.26351 9.48429L6.19049 10.2154C6.67391 10.3982 7.04991 10.7918 7.22448 11.298L7.92276 13.3156C7.92276 13.3156 7.9429 13.3788 8.00333 13.3788C8.06376 13.3788 8.0839 13.3367 8.0839 13.3156L8.78218 11.298C8.95675 10.7918 9.33275 10.3982 9.81617 10.2154L11.7432 9.48429C11.7432 9.48429 11.8036 9.4632 11.8036 9.39993C11.8036 9.33666 11.7633 9.31557 11.7432 9.31557L9.81617 8.58446C9.33275 8.40168 8.95675 8.00801 8.78218 7.50186L8.0839 5.48429C8.0839 5.48429 8.06376 5.42102 8.00333 5.42102Z"
              fill="#F9CB56"
            />
            <path
              d="M8.00336 1.55448C11.864 1.55448 14.9996 5.03427 14.9996 9.3225V15.0589C14.9996 15.6775 14.543 16.1837 13.9857 16.1837H2.02098C1.4637 16.1837 1.00713 15.6775 1.00713 15.0589V9.3225C1.00713 5.03427 4.13596 1.55448 8.00336 1.55448ZM8.00336 13.906C8.23164 13.906 8.46664 13.7724 8.56064 13.4982L9.25892 11.4807C9.37977 11.1221 9.64834 10.8409 9.99077 10.7144L11.9178 9.9833C12.4415 9.78647 12.4415 9.01318 11.9178 8.81634L9.99077 8.08524C9.64834 7.9587 9.37977 7.6775 9.25892 7.31898L8.56064 5.30141C8.46664 5.02724 8.23835 4.89367 8.00336 4.89367C7.76836 4.89367 7.54008 5.02724 7.44608 5.30141L6.7478 7.31898C6.62694 7.6775 6.35837 7.9587 6.01595 8.08524L4.08896 8.81634C3.56525 9.01318 3.56525 9.78647 4.08896 9.9833L6.01595 10.7144C6.35837 10.8409 6.62694 11.1221 6.7478 11.4807L7.44608 13.4982C7.54008 13.7724 7.76836 13.906 8.00336 13.906ZM8.00336 0.5C3.59211 0.5 0 4.45782 0 9.3225V15.0589C0 16.261 0.90642 17.2381 2.02098 17.2381H13.9857C15.1003 17.2381 16.0067 16.261 16.0067 15.0589V9.3225C16 4.45782 12.4146 0.5 8.00336 0.5ZM5.51238 9.39982L6.35837 9.08348C6.98279 8.84446 7.47293 8.33831 7.6945 7.68453L7.99664 6.79877L8.29878 7.68453C8.52707 8.33831 9.01049 8.85149 9.63491 9.08348L10.4809 9.39982L9.63491 9.71617C9.01049 9.95518 8.52035 10.4613 8.29878 11.1151L7.99664 12.0009L7.6945 11.1151C7.46622 10.4613 6.98279 9.94815 6.35837 9.71617L5.51238 9.39982Z"
              fill="#BC9128"
            />
            <path
              d="M2.02097 16.1836H8.80233L14.9928 9.70204V9.32946C14.9928 7.2205 14.2341 5.30837 13.0054 3.90942L9.42676 7.65635C9.56775 7.85318 9.75575 8.01487 9.98404 8.09923L11.911 8.83034C12.4347 9.02717 12.4347 9.80046 11.911 9.9973L9.98404 10.7284C9.64161 10.8549 9.37304 11.1361 9.25219 11.4947L8.55391 13.5122C8.36591 14.0606 7.62734 14.0606 7.43935 13.5122L6.74107 11.4947C6.6605 11.2556 6.50607 11.0588 6.31807 10.9112L1.45026 16.0078C1.6114 16.1273 1.80611 16.1976 2.01425 16.1976L2.02097 16.1836Z"
              fill="#FDEEB3"
            />
          </g>
          <defs>
            <clipPath id="clip0_3491_16434">
              <rect
                width="16"
                height="20"
                fill="white"
                transform="translate(0 0.5)"
              />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  );
};

export default RewardCoins;
