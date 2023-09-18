export class SharedObject {

    public static MobilePattern: string = '09[0-9]{9}$';//'(0|[1-9][0-9]*){11}';//'09[0-9]{9}$';
    public static PasswordPattern: string = '(?!\\S*\\s)(?=[^a-zA-Z]*[a-zA-Z])(?=\\D*\\d).{6,50}';
    public static FarsiPattern: string = '([ ضصثقفغعهخحجچشسیبلاتنمکگپظطزرذدئوًًٌٍَُِّۀآةيژؤإأء\s]).{1,}';
    public static EnglishPattern: string = '([A-Za-z][A-Za-z0-9]{2,10})';
    public static NatiionalCodePattern: string = '[0-9]{10}$';
    public static WebUrlPattern: string = '(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$';
    public static EmailPattern: string = '[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}';
    public static ShebaPattern: string = '(IR|ir)[0-9]{24}$';
    public static CardBankPattern: string = '[0-9]{16}$';
    public static BankAccountPattern: string = '[0-9]{10,}$'; //min 10
}