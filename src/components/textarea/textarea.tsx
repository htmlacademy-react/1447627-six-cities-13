import React from 'react';

type TextAreaProps = {
  value: string;
  disabled?: boolean;
  onChange: (evt: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

function Textarea({value, disabled, onChange}: TextAreaProps): React.JSX.Element {
  return(
    <textarea
      className="reviews__textarea form__textarea"
      id="comment"
      name="comment"
      placeholder="Tell how was your stay, what you like and what can be improved"
      value={value}
      onChange={onChange}
      disabled={disabled}
      required
    />
  );
}

export default Textarea;
