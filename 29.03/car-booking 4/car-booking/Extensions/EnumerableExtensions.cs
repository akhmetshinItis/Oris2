namespace car_booking.Extensions ;

    public static class EnumerableExtensions
    {
        public static IEnumerable<T> WhereIfNotNull<T, TValue>(
            this IEnumerable<T> source,
            TValue? filterValue,
            Func<T, bool> predicate)
        {
            return filterValue != null ? source.Where(predicate) : source;
        }
    }