
export function ShortName(employeeName:string) {
    let shortCardName = '';
    const employeeNameArr = employeeName.split(' ');
    employeeNameArr.forEach( (name:string, index:number)  => {
        if(index === 0) {
           return shortCardName += name
        }
        if(index === employeeNameArr.length-1) {
           return shortCardName += ` ${name}`
        }
        if(name.length >= 3) {
           return shortCardName += ` ${name[0].toLocaleUpperCase()}`;
        }
    });
    return shortCardName;
};
