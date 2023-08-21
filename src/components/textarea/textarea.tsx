import React from 'react';

type TextAreaProps = {
  value: string;
  onChange: (evt: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

function Textarea({value, onChange}: TextAreaProps): React.JSX.Element {
  return(
    <textarea
      className="reviews__textarea form__textarea"
      id="comment"
      name="comment"
      placeholder="Tell how was your stay, what you like and what can be improved"
      value={value}
      onChange={onChange}
    />
  );
}

export default Textarea;
