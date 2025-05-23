import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardFooter } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { Modal } from '../components/ui/Modal';
import { toast } from '../components/ui/Toaster';
import { EyeIcon, EyeOffIcon, LockIcon } from 'lucide-react';
export const LoginPage = ({
  onLogin
}) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [forgotPasswordModal, setForgotPasswordModal] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      const success = onLogin(email, password);
      if (success) {
        toast.success('Login successful');
        navigate('/dashboard');
      } else {
        setError('Invalid email or password');
        toast.error('Login failed');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
      toast.error('Login failed');
    } finally {
      setLoading(false);
    }
  };
  const handleForgotPassword = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success('Password reset link sent to your email');
      setForgotPasswordModal(false);
    } catch (error) {
      toast.error('Failed to send reset link');
    } finally {
      setLoading(false);
    }
  };
  return <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <h1 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
            Login to
            <span className="bg-gradient-to-r from-[#4A00E0] to-[#8E2DE2] bg-clip-text text-transparent">
              {' '}
              FinTech Admin
            </span>
          </h1>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Input type="email" label="Email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} required fullWidth />
            <div className="relative">
              <Input type={showPassword ? 'text' : 'password'} label="Password" placeholder="Enter your password" value={password} onChange={e => setPassword(e.target.value)} required fullWidth />
              <button type="button" className="absolute right-3 top-9 text-gray-500" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
              </button>
            </div>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            <div className="mt-6">
              <Button type="submit" variant="primary" fullWidth disabled={loading}>
                {loading ? 'Logging in...' : 'Login'}
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <button onClick={() => setForgotPasswordModal(true)} className="text-sm text-[#4A00E0] dark:text-[#8E2DE2] hover:underline">
            Forgot Password?
          </button>
        </CardFooter>
      </Card>
      {/* Forgot Password Modal */}
      <Modal isOpen={forgotPasswordModal} onClose={() => setForgotPasswordModal(false)} title="Reset Password">
        <form onSubmit={handleForgotPassword}>
          <div className="mb-6">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Enter your email address and we'll send you a link to reset your
              password.
            </p>
            <Input type="email" label="Email" placeholder="Enter your email" value={resetEmail} onChange={e => setResetEmail(e.target.value)} required fullWidth />
          </div>
          <div className="flex justify-end space-x-3">
            <Button type="button" variant="outline" onClick={() => setForgotPasswordModal(false)}>
              Cancel
            </Button>
            <Button type="submit" variant="primary" disabled={loading}>
              {loading ? 'Sending...' : 'Send Reset Link'}
            </Button>
          </div>
        </form>
      </Modal>
    </div>;
};