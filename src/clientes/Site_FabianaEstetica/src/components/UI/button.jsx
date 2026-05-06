import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  type = 'button', 
  fullWidth = false,
  loading = false,
  icon = null,
  href = null,
  className = "",
  ...props 
}) => {
  
  const classes = [
    'btn',
    `btn--${variant}`,
    fullWidth ? 'btn--full' : '',
    loading ? 'btn--loading' : '',
    className
  ].filter(Boolean).join(' ');

  const content = (
    <>
      {loading && (
        <span className="btn__spinner" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <circle cx="12" cy="12" r="10" opacity="0.25" />
            <path d="M12 2a10 10 0 0 1 10 10" />
          </svg>
        </span>
      )}
      {!loading && icon && <span className="btn__icon">{icon}</span>}
      <span className="btn__text">{children}</span>
    </>
  );

  if (href) {
    return (
      <a 
        href={loading ? '#' : href} 
        className={classes}
        style={loading ? { pointerEvents: 'none' } : {}}
        aria-busy={loading}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button 
      type={type} 
      className={classes} 
      onClick={onClick}
      disabled={loading || props.disabled}
      aria-busy={loading}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;
