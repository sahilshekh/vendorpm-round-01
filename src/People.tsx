// People.tsx

import React from 'react';

type Person = {
  name: string;
  country: string;
};

interface PeopleProps {
  people: Person[];
}

const People: React.FC<PeopleProps> = ({ people }) => {
  return (
    <div>
      

      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
       
        <tbody>
          {people.map((person, index) => (
            <tr key={index} style={{ border: '1px solid #ddd', padding: '8px' }}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{person.name}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{person.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default People;
