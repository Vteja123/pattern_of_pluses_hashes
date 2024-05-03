n=int(input("enter the input value"))
count=1
for i in range(1,2*n):
    hash_char="#"
    plus_char="+"+" "
    spaces="  "
    if i==1:
        print(spaces*(n-1)+hash_char)
    
    elif i==n:
        print((plus_char)*(n-1)+hash_char)
    elif i<n:
        print(spaces*(n-i)+plus_char*(i-1)+hash_char)
    elif i > n:
        print(spaces*(count)+plus_char*(n-(count+1))+hash_char)
        count+=1
    elif i==2*(n-1):
        print(spaces*(n-1)+hash_char)