import { Renderable } from 'react-hot-toast';

import CheckCircle2 from '../../ui/Icons/24/icons/color/checkmark_circle.svg';
import XCircle from '../../ui/Icons/24/icons/color/exclamation_mark.svg';
import { Loader } from '../../ui/Loader';

export interface ToastProps {
  message: Renderable;
  type: 'success' | 'error';
  state?: 'success' | 'error' | 'loading' | 'blank';

  actionText?: string;
  actionTextHandler?: () => void;
}

export const TOAST_ICONS: Record<string, React.ReactNode> = {
  success: <CheckCircle2 />,
  error: <XCircle />,
};

const Toast = ({ message, type, state, actionTextHandler, actionText }: ToastProps) => {
  const getIconClass = () => {
    if (state) {
      return TOAST_ICONS[state];
    }
    return TOAST_ICONS[type];
  };
  return (
    <div className=" shadow-3 flex min-h-[56px] w-[360px] items-center justify-between rounded-2xl bg-black   ">
      <div className="ml-3 flex-1 ">
        <div className="flex items-center gap-4 ">
          {state === 'loading' ? (
            <div>
              <Loader />
            </div>
          ) : state === 'blank' ? null : (
            getIconClass()
          )}
          <div className="text-b2-regular  font-medium text-white [grid-area:_title]">
            {message}
          </div>
        </div>
        {actionText && (
          <div
            className="cursor-pointer"
            role="textbox"
            tabIndex={0}
            onClick={actionTextHandler}
            onKeyDown={actionTextHandler}
          >
            {actionText}
          </div>
        )}
      </div>
    </div>
  );
};

export default Toast;
