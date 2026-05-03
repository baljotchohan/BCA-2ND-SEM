export const unit3 = {
  unit: "UNIT III — SPREADSHEET FOR DATA MANAGEMENT",
  questions: [
    {
      id: "Q1",
      title: "Explain Sorting and Filtering in a spreadsheet with examples. Differentiate between AutoFilter and Advanced Filter.",
      en: `**Sorting:**
Sorting is the process of arranging data in a specific order (ascending or descending, alphabetical or numerical) to make it easier to analyze.
- *Example:* Sorting a student database alphabetically by "Name" (A to Z) or by "Marks" from highest to lowest (Descending).
- **Multi-level Sort:** Sorting by multiple columns. First, sort by "Class", and then within each class, sort by "Roll Number".

**Filtering:**
Filtering allows you to hide rows that do not meet certain criteria, displaying only the data you want to see. The hidden data is not deleted.
- *Example:* Showing only those students who scored more than 80 marks.

**Difference between AutoFilter and Advanced Filter:**
| Feature | AutoFilter (Standard Filter) | Advanced Filter |
|---------|------------------------------|-----------------|
| **Usage** | Quick and simple filtering using drop-down arrows on column headers. | Used for complex criteria across multiple columns using AND/OR logic. |
| **Criteria Location** | Criteria are selected directly from the column headers. | Criteria must be typed in a separate cell range on the sheet. |
| **Data Extraction** | Filters data "in-place" (hides other rows). | Can filter in-place OR copy the filtered results to a completely new location. |
| **Unique Records** | Does not have a direct option to extract unique records only. | Has a built-in checkbox for "Unique records only". |`,
      pa: `**ਸੋਰਟਿੰਗ (Sorting):**
ਡਾਟਾ ਨੂੰ ਕਿਸੇ ਖਾਸ ਤਰਤੀਬ (ਕ੍ਰਮ) ਵਿੱਚ ਲਗਾਉਣ ਨੂੰ Sorting ਕਹਿੰਦੇ ਹਨ (ਜਿਵੇਂ A ਤੋਂ Z ਜਾਂ ਛੋਟੇ ਤੋਂ ਵੱਡੇ)। 
- *ਉਦਾਹਰਣ:* ਵਿਦਿਆਰਥੀਆਂ ਦੇ ਨਾਵਾਂ ਨੂੰ ਵਰਣਮਾਲਾ (A to Z) ਅਨੁਸਾਰ ਲਗਾਉਣਾ ਜਾਂ ਨੰਬਰਾਂ ਨੂੰ ਵੱਧਦੇ ਤੋਂ ਘੱਟਦੇ ਕ੍ਰਮ ਵਿੱਚ ਲਗਾਉਣਾ।

**ਫਿਲਟਰਿੰਗ (Filtering):**
ਫਿਲਟਰ ਦੀ ਵਰਤੋਂ ਸ਼ਰਤਾਂ ਅਨੁਸਾਰ ਸਿਰਫ਼ ਲੋੜੀਂਦਾ ਡਾਟਾ ਦੇਖਣ ਲਈ ਕੀਤੀ ਜਾਂਦੀ ਹੈ। ਜੋ ਡਾਟਾ ਸ਼ਰਤ ਪੂਰੀ ਨਹੀਂ ਕਰਦਾ, ਉਹ ਅਸਥਾਈ ਤੌਰ 'ਤੇ ਲੁਕ (hide) ਜਾਂਦਾ ਹੈ।
- *ਉਦਾਹਰਣ:* ਸਿਰਫ਼ ਉਹਨਾਂ ਵਿਦਿਆਰਥੀਆਂ ਦਾ ਡਾਟਾ ਦੇਖਣਾ ਜਿਨ੍ਹਾਂ ਦੇ 80 ਤੋਂ ਵੱਧ ਨੰਬਰ ਹਨ।

**AutoFilter ਅਤੇ Advanced Filter ਵਿੱਚ ਅੰਤਰ:**
| ਵਿਸ਼ੇਸ਼ਤਾ | AutoFilter (ਆਮ ਫਿਲਟਰ) | Advanced Filter |
|---------|-----------------------|-----------------|
| **ਵਰਤੋਂ** | ਇਹ ਸੌਖਾ ਅਤੇ ਤੇਜ਼ ਹੈ। ਇਸ ਵਿੱਚ ਕਾਲਮ ਦੇ ਉੱਪਰ ਤੀਰ (arrow) ਬਣ ਜਾਂਦਾ ਹੈ। | ਇਹ ਗੁੰਝਲਦਾਰ ਸ਼ਰਤਾਂ (complex criteria) ਲਗਾਉਣ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ। |
| **ਸ਼ਰਤਾਂ ਦੀ ਥਾਂ** | ਸ਼ਰਤਾਂ ਸਿੱਧੀਆਂ ਕਾਲਮ ਹੈਡਰ ਤੋਂ ਚੁਣੀਆਂ ਜਾਂਦੀਆਂ ਹਨ। | ਸ਼ਰਤਾਂ ਸ਼ੀਟ ਉੱਤੇ ਇੱਕ ਵੱਖਰੀ ਜਗ੍ਹਾ (Criteria Range) ਵਿੱਚ ਲਿਖਣੀਆਂ ਪੈਂਦੀਆਂ ਹਨ। |
| **ਨਤੀਜਾ (Result)** | ਇਹ ਉਸੇ ਜਗ੍ਹਾ 'ਤੇ ਡਾਟਾ ਫਿਲਟਰ ਕਰਦਾ ਹੈ (ਬਾਕੀ ਲੁਕਾ ਦਿੰਦਾ ਹੈ)। | ਇਹ ਨਤੀਜੇ ਨੂੰ ਕਾਪੀ ਕਰਕੇ ਕਿਸੇ ਨਵੀਂ ਜਗ੍ਹਾ 'ਤੇ ਵੀ ਦਿਖਾ ਸਕਦਾ ਹੈ। |`
    },
    {
      id: "Q2",
      title: "Explain Data Validation in a spreadsheet. How do you remove duplicates?",
      en: `**Data Validation:**
Data Validation is a feature in spreadsheets used to restrict the type of data or the values that users can enter into a cell. It prevents incorrect data entry at the source.
- *Examples of Rules:* 
  - Restrict entry to whole numbers between 1 and 100 (for marks).
  - Restrict entry to a specific text length (e.g., exactly 10 digits for a phone number).
  - Create a **Drop-Down List** (e.g., selecting "Pass" or "Fail").
- *Alerts:* If a user enters invalid data, the spreadsheet displays an **Error Alert** (Stop, Warning, or Information) rejecting the input.
- *Steps to apply:* Select cell -> Go to Data tab -> Click Data Validation -> Set criteria.

**Removing Duplicates:**
This feature permanently deletes duplicate rows from a selected range or table.
- *Why is it needed?* To clean databases (e.g., removing a customer who accidentally registered twice).
- *Steps to apply:* 
  1. Select the dataset.
  2. Go to the Data tab.
  3. Click "Remove Duplicates".
  4. Select the columns to check for duplication and click OK. The system deletes the duplicate rows and keeps the first unique occurrence.`,
      pa: `**ਡਾਟਾ ਵੈਲੀਡੇਸ਼ਨ (Data Validation):**
ਇਹ ਸਪ੍ਰੈਡਸ਼ੀਟ (Excel) ਦਾ ਇੱਕ ਫੀਚਰ ਹੈ ਜੋ ਇਹ ਕੰਟਰੋਲ ਕਰਦਾ ਹੈ ਕਿ ਯੂਜ਼ਰ ਕਿਸੇ ਸੈੱਲ ਵਿੱਚ ਕੀ ਲਿਖ ਸਕਦਾ ਹੈ। ਇਸ ਨਾਲ ਗਲਤ ਡਾਟਾ ਐਂਟਰੀ ਨੂੰ ਰੋਕਿਆ ਜਾਂਦਾ ਹੈ।
- *ਨਿਯਮਾਂ ਦੀਆਂ ਉਦਾਹਰਣਾਂ:*
  - ਸੈੱਲ ਵਿੱਚ ਸਿਰਫ਼ 1 ਤੋਂ 100 ਦੇ ਵਿਚਕਾਰ ਨੰਬਰ ਹੀ ਲਿਖੇ ਜਾ ਸਕਣ (ਜਿਵੇਂ ਪ੍ਰੀਖਿਆ ਦੇ ਨੰਬਰ)।
  - ਇੱਕ **ਡ੍ਰੌਪ-ਡਾਊਨ ਲਿਸਟ (Drop-Down List)** ਬਣਾਉਣਾ (ਜਿਵੇਂ ਸਿਰਫ਼ "Pass" ਜਾਂ "Fail" ਚੁਣਨ ਦੀ ਆਗਿਆ)।
- *ਗਲਤੀ ਸੁਨੇਹਾ (Error Alert):* ਜੇ ਯੂਜ਼ਰ ਗਲਤ ਡਾਟਾ ਭਰਦਾ ਹੈ, ਤਾਂ ਕੰਪਿਊਟਰ ਇੱਕ ਐਰਰ ਮੈਸੇਜ ਦਿਖਾਉਂਦਾ ਹੈ ਅਤੇ ਐਂਟਰੀ ਰੱਦ ਕਰ ਦਿੰਦਾ ਹੈ।

**ਡੁਪਲੀਕੇਟ ਹਟਾਉਣਾ (Removing Duplicates):**
ਇਹ ਫੀਚਰ ਸਿਲੈਕਟ ਕੀਤੇ ਡਾਟੇ ਵਿੱਚੋਂ ਦੋਹਰੀਆਂ (Duplicate) ਲਾਈਨਾਂ ਨੂੰ ਹਮੇਸ਼ਾ ਲਈ ਡਿਲੀਟ ਕਰ ਦਿੰਦਾ ਹੈ।
- *ਲੋੜ ਕਿਉਂ ਹੈ?* ਡਾਟਾਬੇਸ ਨੂੰ ਸਾਫ਼ ਕਰਨ ਲਈ (ਉਦਾਹਰਣ: ਜੇ ਕਿਸੇ ਵਿਦਿਆਰਥੀ ਦਾ ਨਾਮ ਗਲਤੀ ਨਾਲ ਦੋ ਵਾਰ ਲਿਖਿਆ ਗਿਆ ਹੋਵੇ)।
- *ਕਿਵੇਂ ਕਰੀਏ:* ਡਾਟਾ ਸਿਲੈਕਟ ਕਰੋ -> Data ਟੈਬ 'ਤੇ ਜਾਓ -> "Remove Duplicates" 'ਤੇ ਕਲਿੱਕ ਕਰੋ।`
    },
    {
      id: "Q3",
      title: "Explain Mathematical and Statistical functions with examples.",
      en: `**Mathematical Functions:**
1. \`=SUM(range)\`: Adds all numbers in a range. *(e.g., =SUM(A1:A5) returns the total).*
2. \`=PRODUCT(range)\`: Multiplies all numbers given. *(e.g., =PRODUCT(2, 5) returns 10).*
3. \`=ROUND(number, num_digits)\`: Rounds a number to a specified number of digits. *(e.g., =ROUND(3.14159, 2) returns 3.14).*
4. \`=MOD(number, divisor)\`: Returns the remainder after division. *(e.g., =MOD(10, 3) returns 1).*
5. \`=POWER(number, power)\`: Raises a number to a power. *(e.g., =POWER(5, 2) returns 25).*
6. \`=SQRT(number)\`: Returns the square root. *(e.g., =SQRT(16) returns 4).*
7. \`=ABS(number)\`: Returns absolute value (removes negative sign). *(e.g., =ABS(-5) returns 5).*
8. \`=INT(number)\`: Rounds a number down to the nearest integer. *(e.g., =INT(8.9) returns 8).*

**Statistical Functions:**
1. \`=AVERAGE(range)\`: Calculates the arithmetic mean.
2. \`=MEDIAN(range)\`: Finds the middle number of a sorted range.
3. \`=MODE(range)\`: Returns the most frequently occurring number.
4. \`=MAX(range)\` / \`=MIN(range)\`: Finds the highest / lowest value in a range.
5. \`=COUNT(range)\`: Counts how many cells contain numbers.
6. \`=COUNTA(range)\`: Counts how many cells are NOT empty (text or numbers).
7. \`=COUNTIF(range, criteria)\`: Counts cells that meet a specific condition. *(e.g., =COUNTIF(A1:A10, ">50")).*`,
      pa: `**ਗਣਿਤ ਦੇ ਫੰਕਸ਼ਨ (Mathematical Functions):**
1. \`=SUM()\`: ਇਹ ਦਿੱਤੇ ਗਏ ਨੰਬਰਾਂ ਦਾ ਜੋੜ ਕਰਦਾ ਹੈ। *(ਉਦਾਹਰਣ: =SUM(2,3) ਦਾ ਜਵਾਬ 5 ਆਵੇਗਾ)।*
2. \`=PRODUCT()\`: ਇਹ ਨੰਬਰਾਂ ਨੂੰ ਗੁਣਾ ਕਰਦਾ ਹੈ। *(ਉਦਾਹਰਣ: =PRODUCT(2, 5) ਜਵਾਬ 10)*
3. \`=ROUND()\`: ਇਹ ਨੰਬਰ ਨੂੰ ਰਾਊਂਡ-ਆਫ ਕਰਦਾ ਹੈ। *(ਉਦਾਹਰਣ: =ROUND(3.141, 2) ਜਵਾਬ 3.14)*
4. \`=MOD()\`: ਇਹ ਭਾਗ ਕਰਨ ਤੋਂ ਬਾਅਦ ਬਚਿਆ ਹੋਇਆ ਬਾਕੀ (remainder) ਦੱਸਦਾ ਹੈ। *(ਉਦਾਹਰਣ: =MOD(10, 3) ਜਵਾਬ 1)*
5. \`=POWER()\`: ਇਹ ਕਿਸੇ ਨੰਬਰ ਦੀ ਪਾਵਰ (ਘਾਤ) ਕੱਢਦਾ ਹੈ। *(ਉਦਾਹਰਣ: =POWER(5, 2) ਜਵਾਬ 25)*
6. \`=SQRT()\`: ਇਹ ਵਰਗਮੂਲ (Square root) ਕੱਢਦਾ ਹੈ। *(ਉਦਾਹਰਣ: =SQRT(25) ਜਵਾਬ 5)*

**ਸਟੈਟਿਸਟੀਕਲ ਫੰਕਸ਼ਨ (Statistical Functions):**
1. \`=AVERAGE()\`: ਇਹ ਦਿੱਤੇ ਗਏ ਨੰਬਰਾਂ ਦੀ ਔਸਤ (Average) ਕੱਢਦਾ ਹੈ।
2. \`=MEDIAN()\`: ਇਹ ਨੰਬਰਾਂ ਦੇ ਵਿਚਕਾਰਲਾ ਮੁੱਲ ਲੱਭਦਾ ਹੈ।
3. \`=MODE()\`: ਇਹ ਉਹ ਨੰਬਰ ਲੱਭਦਾ ਹੈ ਜੋ ਸਭ ਤੋਂ ਵੱਧ ਵਾਰ ਆਇਆ ਹੋਵੇ।
4. \`=MAX() / =MIN()\`: ਇਹ ਸਭ ਤੋਂ ਵੱਡਾ ਅਤੇ ਸਭ ਤੋਂ ਛੋਟਾ ਨੰਬਰ ਲੱਭਦੇ ਹਨ।
5. \`=COUNT()\`: ਇਹ ਗਿਣਦਾ ਹੈ ਕਿ ਕਿੰਨੇ ਸੈੱਲਾਂ ਵਿੱਚ ਸਿਰਫ਼ ਨੰਬਰ ਲਿਖੇ ਹਨ।
6. \`=COUNTIF()\`: ਇਹ ਸਿਰਫ਼ ਸ਼ਰਤ ਪੂਰੀ ਕਰਨ ਵਾਲੇ ਸੈੱਲਾਂ ਨੂੰ ਗਿਣਦਾ ਹੈ। *(ਉਦਾਹਰਣ: =COUNTIF(A1:A5, ">50"))*`
    },
    {
      id: "Q4",
      title: "Explain Logical Functions (IF, AND, OR) and Nested IF with examples.",
      en: `**Logical Functions:**
These functions return TRUE or FALSE, or perform actions based on conditions.

1. **IF:** Checks a condition. Returns one value if TRUE, and another if FALSE.
   - *Syntax:* \`=IF(condition, value_if_true, value_if_false)\`
   - *Example:* \`=IF(A2>=40, "Pass", "Fail")\` (If marks in A2 are 40 or more, print Pass, else print Fail).

2. **AND:** Returns TRUE only if ALL conditions are true.
   - *Syntax:* \`=AND(condition1, condition2)\`
   - *Example:* \`=AND(A2>50, B2>50)\` (True only if both subjects have marks > 50).

3. **OR:** Returns TRUE if AT LEAST ONE condition is true.
   - *Syntax:* \`=OR(condition1, condition2)\`

**Nested IF Function:**
When you need to test multiple conditions, you place one IF function inside another. This is called nesting.
- *Example:* Assigning grades based on marks in cell A2.
- \`=IF(A2>=80, "A Grade", IF(A2>=60, "B Grade", IF(A2>=40, "C Grade", "Fail")))\`
- *How it works:* If A2 is 85, it stops at the first condition and prints "A Grade". If A2 is 70, the first condition is false, so it moves to the second IF and prints "B Grade".`,
      pa: `**ਲੌਜੀਕਲ ਫੰਕਸ਼ਨ (Logical Functions):**
ਇਹ ਫੰਕਸ਼ਨ ਸ਼ਰਤਾਂ ਦੇ ਆਧਾਰ 'ਤੇ ਫੈਸਲਾ ਲੈਂਦੇ ਹਨ।

1. **IF (ਜੇਕਰ):** ਇਹ ਇੱਕ ਸ਼ਰਤ ਚੈੱਕ ਕਰਦਾ ਹੈ। ਜੇ ਸ਼ਰਤ ਸਹੀ ਹੋਵੇ, ਤਾਂ ਪਹਿਲਾ ਜਵਾਬ ਦਿੰਦਾ ਹੈ, ਜੇ ਗਲਤ ਹੋਵੇ ਤਾਂ ਦੂਜਾ ਜਵਾਬ ਦਿੰਦਾ ਹੈ।
   - *ਸਿੰਟੈਕਸ:* \`=IF(ਸ਼ਰਤ, ਸਹੀ_ਹੋਣ_ਤੇ_ਜਵਾਬ, ਗਲਤ_ਹੋਣ_ਤੇ_ਜਵਾਬ)\`
   - *ਉਦਾਹਰਣ:* \`=IF(A2>=40, "Pass", "Fail")\` (ਜੇ A2 ਵਿੱਚ ਨੰਬਰ 40 ਜਾਂ ਵੱਧ ਹਨ, ਤਾਂ "Pass" ਲਿਖੋ, ਨਹੀਂ ਤਾਂ "Fail")।

2. **AND (ਅਤੇ):** ਇਹ ਉਦੋਂ ਹੀ TRUE (ਸਹੀ) ਜਵਾਬ ਦਿੰਦਾ ਹੈ ਜੇਕਰ **ਸਾਰੀਆਂ** ਸ਼ਰਤਾਂ ਪੂਰੀਆਂ ਹੋਣ।
   - *ਉਦਾਹਰਣ:* \`=AND(A2>50, B2>50)\`

3. **OR (ਜਾਂ):** ਇਹ ਉਦੋਂ TRUE ਜਵਾਬ ਦਿੰਦਾ ਹੈ ਜੇਕਰ **ਘੱਟੋ-ਘੱਟ ਇੱਕ** ਸ਼ਰਤ ਪੂਰੀ ਹੋਵੇ।

**Nested IF (ਨੈਸਟਿਡ IF):**
ਜਦੋਂ ਸਾਡੇ ਕੋਲ 2 ਤੋਂ ਵੱਧ ਸ਼ਰਤਾਂ ਹੋਣ (ਜਿਵੇਂ ਵੱਖ-ਵੱਖ ਗ੍ਰੇਡ ਦੇਣਾ), ਤਾਂ ਅਸੀਂ ਇੱਕ IF ਦੇ ਅੰਦਰ ਦੂਜਾ IF ਵਰਤਦੇ ਹਾਂ।
- *ਉਦਾਹਰਣ:* \`=IF(A2>=80, "A Grade", IF(A2>=60, "B Grade", "Fail"))\`
- ਇਸ ਫਾਰਮੂਲੇ ਵਿੱਚ: ਜੇ ਨੰਬਰ 80 ਤੋਂ ਵੱਧ ਹਨ ਤਾਂ "A", ਜੇ 60 ਤੋਂ ਵੱਧ ਹਨ ਤਾਂ "B", ਨਹੀਂ ਤਾਂ "Fail" ਆਵੇਗਾ।`
    },
    {
      id: "Q5",
      title: "Write short notes on Flash Fill and Text-to-Columns.",
      en: `**1. Flash Fill:**
Flash Fill is a smart feature in Excel that automatically fills your data when it senses a pattern.
- *Use Case:* If you have a column with Full Names (e.g., "John Smith", "Jane Doe") and you want to separate First Names into a new column. You just type "John" in the next column, press Enter, and start typing "Jane". Excel will recognize the pattern and automatically suggest extracting all first names. Pressing Enter applies it instantly.
- *Shortcut:* \`Ctrl + E\`

**2. Text-to-Columns:**
This feature is used to split a single column of text into multiple columns based on a specific delimiter (like a space, comma, or tab).
- *Use Case:* You import a CSV file where data is stuck in one cell like "101,John,Science,85".
- *How it works:* You select the column, click "Text to Columns" in the Data tab, choose "Delimited", and select "Comma". Excel splits the data into four clean columns: RollNo (101), Name (John), Subject (Science), and Marks (85).`,
      pa: `**1. ਫਲੈਸ਼ ਫਿਲ (Flash Fill):**
ਇਹ ਐਕਸਲ ਦਾ ਇੱਕ ਸਮਾਰਟ ਫੀਚਰ ਹੈ ਜੋ ਤੁਹਾਡੇ ਕੰਮ ਕਰਨ ਦੇ ਪੈਟਰਨ ਨੂੰ ਸਮਝ ਕੇ ਬਾਕੀ ਦਾ ਡਾਟਾ ਆਪਣੇ ਆਪ ਭਰ ਦਿੰਦਾ ਹੈ।
- *ਵਰਤੋਂ:* ਜੇਕਰ ਇੱਕ ਕਾਲਮ ਵਿੱਚ ਪੂਰੇ ਨਾਮ (ਜਿਵੇਂ "John Smith") ਲਿਖੇ ਹਨ, ਅਤੇ ਤੁਸੀਂ ਪਹਿਲਾ ਨਾਮ ਵੱਖਰਾ ਕਰਨਾ ਚਾਹੁੰਦੇ ਹੋ। ਤੁਸੀਂ ਅਗਲੇ ਕਾਲਮ ਵਿੱਚ ਸਿਰਫ਼ "John" ਲਿਖੋ, ਐਕਸਲ ਪੈਟਰਨ ਸਮਝ ਲਵੇਗਾ ਅਤੇ ਬਾਕੀ ਸਾਰੇ ਨਾਮ ਆਪਣੇ ਆਪ ਵੱਖਰੇ ਕਰ ਦੇਵੇਗਾ। 
- *ਸ਼ਾਰਟਕੱਟ:* \`Ctrl + E\`

**2. ਟੈਕਸਟ-ਟੂ-ਕਾਲਮਸ (Text-to-Columns):**
ਇਹ ਫੀਚਰ ਇੱਕ ਕਾਲਮ ਦੇ ਟੈਕਸਟ ਨੂੰ ਤੋੜ ਕੇ ਵੱਖ-ਵੱਖ ਕਾਲਮਾਂ ਵਿੱਚ ਵੰਡਣ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।
- *ਵਰਤੋਂ:* ਜਦੋਂ ਤੁਸੀਂ ਕੋਈ ਬਾਹਰੀ ਫਾਈਲ ਇੰਪੋਰਟ ਕਰਦੇ ਹੋ ਤਾਂ ਕਈ ਵਾਰ ਡਾਟਾ ਇੱਕੋ ਸੈੱਲ ਵਿੱਚ ਆ ਜਾਂਦਾ ਹੈ (ਜਿਵੇਂ "101,John,85")।
- "Text to Columns" ਦੀ ਵਰਤੋਂ ਕਰਕੇ ਅਸੀਂ ਕਾਮੇ (Comma) ਜਾਂ ਸਪੇਸ (Space) ਦੇ ਆਧਾਰ 'ਤੇ ਇਸ ਡਾਟੇ ਨੂੰ ਵੱਖ-ਵੱਖ ਕਾਲਮਾਂ (Roll No, Name, Marks) ਵਿੱਚ ਵੰਡ ਸਕਦੇ ਹਾਂ।`
    },
    {
      id: "Q6",
      title: "What is Conditional Formatting? How is it applied?",
      en: `**Conditional Formatting:**
Conditional Formatting is a feature that automatically changes the appearance (color, font, icons) of cells based on specific rules or conditions. It helps in quickly spotting important trends and outliers in your data without any manual effort.

**Common Uses:**
1. **Highlight Cells Rules:** Automatically color cells that are greater than, less than, or equal to a value. *(e.g., highlight all marks below 40 in RED to instantly see fail students).*
2. **Top/Bottom Rules:** Highlight the top 10 or bottom 10 values, or values above/below the average.
3. **Data Bars:** Fill each cell with a horizontal bar proportional to its value (like a mini bar chart inside the cell).
4. **Color Scales:** Apply a gradient of colors (like Green → Yellow → Red) to visually represent value ranges.
5. **Icon Sets:** Place small icons (arrows, traffic lights, stars) inside cells to indicate status.

**Steps to Apply:**
1. Select the range of cells.
2. Go to Home tab → Conditional Formatting.
3. Choose a rule type (e.g., "Highlight Cells Rules" → "Greater Than").
4. Set the value and formatting style (e.g., greater than 80 → Green Fill).
5. Click OK.`,
      pa: `**ਕੰਡੀਸ਼ਨਲ ਫਾਰਮੈਟਿੰਗ (Conditional Formatting):**
ਇਹ ਇੱਕ ਅਜਿਹਾ ਫੀਚਰ ਹੈ ਜੋ ਕੁਝ ਸ਼ਰਤਾਂ ਦੇ ਆਧਾਰ 'ਤੇ ਸੈੱਲਾਂ ਦਾ ਰੰਗ, ਫੌਂਟ ਜਾਂ ਆਈਕਨ ਆਪਣੇ ਆਪ ਬਦਲ ਦਿੰਦਾ ਹੈ। ਇਸ ਨਾਲ ਡਾਟੇ ਵਿੱਚ ਮਹੱਤਵਪੂਰਨ ਚੀਜ਼ਾਂ ਤੁਰੰਤ ਦਿਖਾਈ ਦਿੰਦੀਆਂ ਹਨ।

**ਆਮ ਵਰਤੋਂ:**
1. **ਸੈੱਲ ਹਾਈਲਾਈਟ ਕਰਨਾ:** ਜੋ ਸੈੱਲ ਕਿਸੇ ਸ਼ਰਤ ਨੂੰ ਪੂਰਾ ਕਰਦੇ ਹਨ, ਉਹਨਾਂ ਦਾ ਰੰਗ ਬਦਲ ਜਾਂਦਾ ਹੈ (ਜਿਵੇਂ 40 ਤੋਂ ਘੱਟ ਨੰਬਰ ਲਾਲ ਹੋ ਜਾਣ)।
2. **ਡਾਟਾ ਬਾਰ:** ਹਰ ਸੈੱਲ ਵਿੱਚ ਇੱਕ ਛੋਟੀ ਪੱਟੀ ਬਣ ਜਾਂਦੀ ਹੈ ਜੋ ਮੁੱਲ ਦੇ ਹਿਸਾਬ ਨਾਲ ਲੰਬੀ-ਛੋਟੀ ਹੁੰਦੀ ਹੈ।
3. **ਕਲਰ ਸਕੇਲ:** ਰੰਗਾਂ ਦੀ ਲੜੀ (ਜਿਵੇਂ ਹਰਾ → ਪੀਲਾ → ਲਾਲ) ਲਗਾ ਕੇ ਮੁੱਲ ਦੇ ਪੱਧਰ ਦੱਸੇ ਜਾ ਸਕਦੇ ਹਨ।
4. **ਆਈਕਨ ਸੈੱਟ:** ਸੈੱਲਾਂ ਵਿੱਚ ਛੋਟੇ ਆਈਕਨ (ਤੀਰ, ਸਿਤਾਰੇ) ਲਗਾ ਕੇ ਸਥਿਤੀ ਦਿਖਾਈ ਜਾ ਸਕਦੀ ਹੈ।

**ਕਿਵੇਂ ਲਗਾਈਏ:** ਸੈੱਲ ਸਿਲੈਕਟ ਕਰੋ → Home ਟੈਬ → Conditional Formatting → ਸ਼ਰਤ ਅਤੇ ਰੰਗ ਚੁਣੋ → OK।`
    },
    {
      id: "Q7",
      title: "Explain SUMIF, SUMIFS, and AVERAGEIF functions with examples.",
      en: `These are conditional functions that perform calculations only on cells that meet specific criteria.

**1. SUMIF (Single Condition Sum):**
Adds values in a range that meet ONE condition.
- *Syntax:* \`=SUMIF(range, criteria, sum_range)\`
- *Example:* \`=SUMIF(B2:B10, "Science", C2:C10)\` → Adds marks only for the "Science" subject.

**2. SUMIFS (Multiple Conditions Sum):**
Adds values that meet TWO or more conditions simultaneously.
- *Syntax:* \`=SUMIFS(sum_range, criteria_range1, criteria1, criteria_range2, criteria2)\`
- *Example:* \`=SUMIFS(D2:D10, B2:B10, "Science", C2:C10, "Pass")\` → Adds marks only for "Science" students who also "Passed".

**3. AVERAGEIF (Conditional Average):**
Calculates the average of only those cells that meet a specific condition.
- *Syntax:* \`=AVERAGEIF(range, criteria, average_range)\`
- *Example:* \`=AVERAGEIF(A2:A10, "Male", C2:C10)\` → Calculates the average marks of only Male students.

**Key Difference:** SUMIF allows only 1 condition. SUMIFS allows multiple conditions. AVERAGEIF finds the average (not the total) for matching rows.`,
      pa: `ਇਹ ਅਜਿਹੇ ਫੰਕਸ਼ਨ ਹਨ ਜੋ ਸਿਰਫ਼ ਉਹਨਾਂ ਸੈੱਲਾਂ 'ਤੇ ਕੈਲਕੁਲੇਸ਼ਨ ਕਰਦੇ ਹਨ ਜੋ ਦਿੱਤੀ ਗਈ ਸ਼ਰਤ ਨੂੰ ਪੂਰਾ ਕਰਦੇ ਹਨ।

**1. SUMIF (ਇੱਕ ਸ਼ਰਤ ਵਾਲਾ ਜੋੜ):**
ਸਿਰਫ਼ ਉਹਨਾਂ ਕੀਮਤਾਂ ਦਾ ਜੋੜ ਕਰਦਾ ਹੈ ਜੋ **ਇੱਕ** ਸ਼ਰਤ ਪੂਰੀ ਕਰਦੀਆਂ ਹਨ।
- *ਉਦਾਹਰਣ:* \`=SUMIF(B2:B10, "Science", C2:C10)\` → ਸਿਰਫ਼ "Science" ਵਿਸ਼ੇ ਦੇ ਨੰਬਰ ਜੋੜਦਾ ਹੈ।

**2. SUMIFS (ਕਈ ਸ਼ਰਤਾਂ ਵਾਲਾ ਜੋੜ):**
ਇਹ ਉਹਨਾਂ ਕੀਮਤਾਂ ਦਾ ਜੋੜ ਕਰਦਾ ਹੈ ਜੋ **ਦੋ ਜਾਂ ਵੱਧ** ਸ਼ਰਤਾਂ ਪੂਰੀਆਂ ਕਰਦੀਆਂ ਹਨ।
- *ਉਦਾਹਰਣ:* ਸਿਰਫ਼ "Science" ਵਿਸ਼ੇ ਵਾਲੇ ਅਤੇ "Pass" ਹੋਏ ਵਿਦਿਆਰਥੀਆਂ ਦੇ ਨੰਬਰ ਜੋੜਨਾ।

**3. AVERAGEIF (ਸ਼ਰਤ ਵਾਲੀ ਔਸਤ):**
ਸਿਰਫ਼ ਸ਼ਰਤ ਪੂਰੀ ਕਰਨ ਵਾਲੇ ਸੈੱਲਾਂ ਦੀ ਔਸਤ ਕੱਢਦਾ ਹੈ (ਜੋੜ ਨਹੀਂ, ਔਸਤ)।
- *ਉਦਾਹਰਣ:* \`=AVERAGEIF(A2:A10, "Male", C2:C10)\` → ਸਿਰਫ਼ ਮੁੰਡਿਆਂ ਦੇ ਨੰਬਰਾਂ ਦੀ ਔਸਤ ਕੱਢਦਾ ਹੈ।

**ਮੁੱਖ ਫਰਕ:** SUMIF ਵਿੱਚ 1 ਸ਼ਰਤ, SUMIFS ਵਿੱਚ ਕਈ ਸ਼ਰਤਾਂ, ਅਤੇ AVERAGEIF ਜੋੜ ਦੀ ਬਜਾਏ ਔਸਤ ਕੱਢਦਾ ਹੈ।`
    },
    {
      id: "Q8",
      title: "What is Freeze Panes? Explain its types and use.",
      en: `**Freeze Panes:**
When working with large spreadsheets, if you scroll down, the column headers (like Name, Age, Marks) disappear. Freeze Panes is a feature that locks specific rows or columns so they remain visible while scrolling through the rest of the data.

**Types of Freeze Panes:**
1. **Freeze Top Row:** Locks only the first row. When you scroll down, the header row stays visible at the top.
2. **Freeze First Column:** Locks only the first column. When you scroll right, the first column stays visible on the left.
3. **Freeze Panes (Custom):** You select any cell, and everything above that row AND to the left of that column gets frozen.
   - *Example:* If you click cell C3 and choose Freeze Panes, then Rows 1-2 and Columns A-B will be frozen.

**How to Apply:** Go to View tab → Freeze Panes → Choose the type.
**How to Remove:** Go to View tab → Freeze Panes → Unfreeze Panes.`,
      pa: `**ਫ੍ਰੀਜ਼ ਪੈਨਸ (Freeze Panes):**
ਜਦੋਂ ਅਸੀਂ ਬਹੁਤ ਵੱਡੀ ਸਪ੍ਰੈਡਸ਼ੀਟ ਵਿੱਚ ਹੇਠਾਂ ਸਕ੍ਰੋਲ ਕਰਦੇ ਹਾਂ, ਤਾਂ ਉੱਪਰ ਵਾਲੀਆਂ ਹੈਡਿੰਗਾਂ (ਜਿਵੇਂ ਨਾਮ, ਉਮਰ, ਨੰਬਰ) ਅਲੋਪ ਹੋ ਜਾਂਦੀਆਂ ਹਨ। Freeze Panes ਇੱਕ ਫੀਚਰ ਹੈ ਜੋ ਕੁਝ ਲਾਈਨਾਂ ਜਾਂ ਕਾਲਮਾਂ ਨੂੰ ਲਾਕ ਕਰ ਦਿੰਦਾ ਹੈ ਤਾਂ ਜੋ ਸਕ੍ਰੋਲ ਕਰਨ 'ਤੇ ਵੀ ਉਹ ਦਿਸਦੇ ਰਹਿਣ।

**ਕਿਸਮਾਂ:**
1. **Freeze Top Row:** ਸਿਰਫ਼ ਪਹਿਲੀ ਲਾਈਨ ਨੂੰ ਫ੍ਰੀਜ਼ ਕਰਦਾ ਹੈ। ਹੇਠਾਂ ਸਕ੍ਰੋਲ ਕਰਨ 'ਤੇ ਹੈਡਰ ਲਾਈਨ ਦਿਸਦੀ ਰਹਿੰਦੀ ਹੈ।
2. **Freeze First Column:** ਸਿਰਫ਼ ਪਹਿਲੇ ਕਾਲਮ ਨੂੰ ਫ੍ਰੀਜ਼ ਕਰਦਾ ਹੈ।
3. **Freeze Panes (ਕਸਟਮ):** ਕੋਈ ਵੀ ਸੈੱਲ ਸਿਲੈਕਟ ਕਰੋ, ਉਸ ਤੋਂ ਉੱਪਰ ਵਾਲੀਆਂ ਲਾਈਨਾਂ ਅਤੇ ਖੱਬੇ ਵਾਲੇ ਕਾਲਮ ਫ੍ਰੀਜ਼ ਹੋ ਜਾਣਗੇ।

**ਕਿਵੇਂ ਲਗਾਈਏ:** View ਟੈਬ → Freeze Panes → ਕਿਸਮ ਚੁਣੋ।
**ਕਿਵੇਂ ਹਟਾਈਏ:** View ਟੈਬ → Freeze Panes → Unfreeze Panes।`
    }
  ]
};
