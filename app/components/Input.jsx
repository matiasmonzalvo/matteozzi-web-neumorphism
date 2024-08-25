import React from 'react';

export default function Input({
    label,
    type,
    name,
    value,
    onChange,
    error,
    isTextarea = false
}) {
    const commonStyles =
        'w-full px-4 py-3 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500';
    const labelStyles =
        'block text-black text-sm font-medium mb-2 text-left';
    const inputStyles =
        'bg-white border border-gray-500 shadow-sm focus:ring-teal-300 focus:border-blue-500 rounded-3xl';

    return (
        <div className="mb-4">
            <label className={labelStyles}>{label}:</label>
            {isTextarea ? (
                <textarea
                    name={name}
                    value={value}
                    onChange={onChange}
                    required
                    rows={4}
                    className={`${commonStyles} ${inputStyles} resize-none`}
                />
            ) : (
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    required
                    className={`${commonStyles} ${inputStyles}`}
                />
            )}
            {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
        </div>
    );
}
