secret_uname, secret_pwd = 'admin' , 'admin'
while True:
    print("welcome to admin login")
    username = input('enter username: ')
    password = input('enter password: ')
    if username == secret_uname and password == secret_pwd:
        print('login successful ✔')
        break
    else:
        print('invalid credentials 😘')
        print("please try again!")
        