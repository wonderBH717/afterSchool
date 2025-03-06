import flatpickr from 'flatpickr';
import { Japanese } from 'flatpickr/dist/l10n/ja.js';
import { useEffect } from 'react';

interface DatePickerJpProps {
  selectedDate: Date;
  onDateChange: (date: Date) => void;
}

const DatePickerJp: React.FC<DatePickerJpProps> = ({
  selectedDate,
  onDateChange,
}) => {
  useEffect(() => {
    const picker = flatpickr('.form-datepicker', {
      mode: 'single',
      static: true,
      monthSelectorType: 'static',
      dateFormat: 'Y年m月d日(D)',
      locale: Japanese,
      defaultDate: selectedDate,
      onChange: ([date]) => {
        onDateChange(date);
      },
    }) as flatpickr.Instance;

    return () => {
      picker.destroy();
    };
  }, [selectedDate]);

  return (
    <div className="relative">
      <input
        className="form-datepicker w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
        placeholder="YYYY年MM月DD日"
        data-class="flatpickr-right"
      />
    </div>
  );
};

export default DatePickerJp;
