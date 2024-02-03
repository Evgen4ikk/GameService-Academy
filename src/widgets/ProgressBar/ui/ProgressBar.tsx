import { FC } from 'react';

interface Rating {
  id: number;
  title: string;
  count: number;
  percent: number;
}

interface Props {
  ratings: Rating[];
}

export const ProgressBar: FC<Props> = ({ ratings }) => {
  return (
    <div>
      <div
        style={{ width: '600px', backgroundColor: '#ddd', borderRadius: '5px' }}
      >
        {ratings.map(rating => (
          <div
            key={rating.id}
            style={{
              width: `${rating.percent}%`,
              height: '50px',
              backgroundColor: getColor(rating),
              float: 'left',
              //   borderStartStartRadius:
              //     getColor(rating) === '#1ba344' ? '4px' : '0px',
              //   borderBottomLeftRadius:
              //     getColor(rating) === '#1ba344' ? '4px' : '0px',
              //   borderTopRightRadius:
              //     getColor(rating) === '#f62f3e' ? '4px' : '0px',
              //   borderBottomRightRadius:
              //     getColor(rating) === '#f62f3e' ? '4px' : '0px',
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

const getColor = (rating: Rating): string => {
  switch (rating.title) {
    case 'exceptional':
      return '#1ba344';
    case 'recommended':
      return '#4a63c8';
    case 'meh':
      return '#f9b44a';
    case 'skip':
      return '#f62f3e';
    default:
      return 'black';
  }
};
