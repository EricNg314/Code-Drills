USE Mail_Values_DB;

-- Show all data if people table's PersonId has a corresponding PersonId from Address table.
SELECT * FROM people AS merged
INNER JOIN Address ON people.PersonId = Address.PersonId;

-- Show all data from people and add their corresponding address from Address table based on PersonId.
SELECT * FROM people
LEFT JOIN Address ON people.PersonId = Address.PersonId;

-- Show all data from Address and add their corresponding person from people table based on PersonId.
SELECT * FROM people
RIGHT JOIN Address ON people.PersonId = Address.PersonId;

-- Show person's ID, LastName, FirstName, Savings, Avg_Price, and the TotalValue. TotalValue is defined as the sum of Savings + Avg_Price
SELECT people.PersonId, people.LastName, people.FirstName, people.Savings, Address.Avg_Price, people.Savings + Address.Avg_Price AS TotalValue FROM people
INNER JOIN Address ON people.PersonID = Address.PersonId;