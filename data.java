import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DatabaseConnection {
    
    private static final String URL = "jdbc:mysql://localhost:3306/your_database_name";
    private static final String USER = "your_database_username";
    private static final String PASSWORD = "your_database_password";
    
    public static Connection getConnection() {
        try {
            return DriverManager.getConnection(URL, USER, PASSWORD);
        } catch (SQLException e) {
            throw new RuntimeException("Error connecting to the database", e);
        }
    }
}
public class User {
    private Long id;
    private String fullName;
    private String email;
    private String password;  // Note: This should ideally store hashed passwords, not plaintext!

