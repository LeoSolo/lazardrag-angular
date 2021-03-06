namespace Models.Products
{
    public class Product
    {
        public long Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public string Image { get; set; }
        public int Type { get; set; }
        public int SubType { get; set; }
        public string Size { get; set; }
        public bool IsDeleted { get; set; }
    }
}
