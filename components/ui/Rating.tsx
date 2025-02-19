'use client';

interface RatingProps {
  value: number;
  className?: string;
}

export const Rating: React.FC<RatingProps> = ({ value, className = '' }) => {
  return (
    <div className={`flex gap-1 ${className}`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} className="text-yellow-400">
          {star <= value ? '★' : '☆'}
        </span>
        
      ))}
    </div>
  );
};
