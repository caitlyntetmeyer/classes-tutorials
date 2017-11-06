protected virtual void Dispose(bool disposing)
{
    if (disposed)
    return;

    if (disposing)
    {
        // Free up any managed objects here.
    }
        // Free up any unmanaged objects here.
        disposed = true;
}