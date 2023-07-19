# OfficeProject

Modules
******************************************
npm i --save express path mysql2 sequelize mongoose cors dotenv express-fileupload uuid jsonwebtoken nodemailer nodemon

##############################################

Database Design
**********************************************

Project : OfficeProject

    1. Employee
                    name,phone,email,type(admin,hr,employee),joining date, Image, active status, created by

    2. User
            email,password,employeeId, status

    3. LeaveRequest
                    description,days,startDate,reqDate,employeeId, type(SL,CL,PL),Status(Pending,approve, reject, cancle)

    4. LeaveRecord
                    requestId,days,startDate,approveDate,approveBy

    5. ChatRecord
                    datetime,sender,receiver